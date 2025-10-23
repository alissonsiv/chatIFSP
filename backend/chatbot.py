import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
import pyttsx3
import json
import re
from functools import lru_cache
from difflib import SequenceMatcher

# ================= CONFIGURAÇÃO DA API ===================
with open('api_key.txt', 'r') as f:
    API_KEY = f.read().strip()
genai.configure(api_key=API_KEY)

# ================= INICIALIZAÇÃO DO SINTETIZADOR DE VOZ ===
engine = pyttsx3.init()
engine.setProperty('rate', engine.getProperty('rate') + 100)

# ================= CARREGAR BANCO DE DADOS ===============
with open('keywords.json', 'r', encoding='utf-8') as f:
    campus_data = json.load(f)

# ================= INICIALIZAR MODELO ====================
gemini_model = genai.GenerativeModel('gemini-2.5-pro')

# ================= FUNÇÕES AUXILIARES ====================
def speak_text(text):
    """Lê o texto em voz alta."""
    engine.say(text)
    engine.runAndWait()

def remove_accents(text):
    """Remove acentos e caracteres especiais do texto."""
    text = re.sub(r'[^\w\s]', '', text)
    replacements = {
        'á':'a','à':'a','ã':'a','â':'a',
        'é':'e','ê':'e','í':'i','ó':'o','ô':'o','õ':'o','ú':'u','ç':'c'
    }
    for k, v in replacements.items():
        text = text.replace(k, v)
    return text.lower()

# ================= BUSCA POR PALAVRAS-CHAVE =============
def search_keywords(question):
    """Retorna informação do banco se alguma palavra-chave corresponder."""
    normalized_question = remove_accents(question)
    words = set(normalized_question.split())

    for key, value in campus_data.items():
        for keyword in value.get("keywords", []):
            if set(remove_accents(keyword).split()) & words:
                return value.get("info")
    return None

# ================= CONTEXTO  =====================
def generate_context(question):
    """Gera contexto relevante usando similaridade aproximada."""
    question_norm = remove_accents(question)
    scored_matches = []

    for key, value in campus_data.items():
        info_norm = remove_accents(value["info"])
        score = SequenceMatcher(None, question_norm, info_norm).ratio()
        if score > 0.3: 
            scored_matches.append((score, f"{key}: {value['info']}"))

    scored_matches.sort(key=lambda x: x[0], reverse=True)

    if scored_matches:
        return "\n".join([c[1] for c in scored_matches[:10]])  

    return ""


# ================= FUNÇÃO PRINCIPAL =====================
@lru_cache(maxsize=100)
def ask_ai(question):
    """Consulta o modelo de IA com contexto relevante e fallback por palavras-chave."""
    context = generate_context(question)
    prompt = (
        f"Você é um assistente virtual especializado no IFSP Campus Salto. "
        f"Responda de forma concisa e objetiva a qualquer pergunta sobre o campus, fornecendo respostas completas diretamente relacionadas. "
        f"Use frases naturais, sem símbolos ou caracteres especiais, apenas letras e acentos normais. "
        f"Contexto: {context}\n"
        f"Pergunta: {question}"
    )

    try:
        response = gemini_model.generate_content(prompt)
        text = response.text.strip()

        if not text or text.lower() in ["não sei", "desculpe, não sei", "não posso responder", "não tenho informação"]:
            fallback = search_keywords(question)
            if fallback:
                print("[FALLBACK] IA não respondeu corretamente, usando palavras-chave.")
                return fallback
            return "Desculpe, não tenho uma resposta para isso."
        return text

    except Exception as e:
        print(f"[ERRO IA] {e}")
        fallback = search_keywords(question)
        if fallback:
            print("[FALLBACK] Erro na IA, usando palavras-chave.")
            return fallback
        return "Desculpe, não tenho uma resposta para isso."

# ================= FLASK APP ============================
app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    """Rota para receber pergunta e retornar resposta do assistente."""
    data = request.get_json()
    question = data.get("pergunta")
    if not question:
        return jsonify({"resposta": "Pergunta não fornecida"}), 400
    return jsonify({"resposta": ask_ai(question)})

if __name__ == "__main__":
    app.run(port=3000, debug=True)
