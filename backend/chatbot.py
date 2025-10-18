import google.generativeai as genai
import pyttsx3
import json
import re
from flask import Flask, request, jsonify
from flask_cors import CORS

# ================= CONFIGURAÇÃO DA API ===================
with open('api_key.txt', 'r') as f:
    API_KEY = f.read().strip()

genai.configure(api_key=API_KEY)

# ================= INICIALIZAR SINTETIZADOR DE VOZ =========
engine = pyttsx3.init()
rate = engine.getProperty('rate')
engine.setProperty('rate', rate + 100)

# ================= CARREGAR BANCO DE DADOS ===============
with open('keywords.json', 'r', encoding='utf-8') as f:
    campus_dados = json.load(f)

# ================= FUNÇÕES AUXILIARES ====================
def falar(texto):
    engine.say(texto)
    engine.runAndWait()

def remove_accents(text):
    text = re.sub(r'[^\w\s]', '', text)
    replacements = {
        'á':'a','à':'a','ã':'a','â':'a',
        'é':'e','ê':'e','í':'i',
        'ó':'o','ô':'o','õ':'o',
        'ú':'u','ç':'c'
    }
    for k, v in replacements.items():
        text = text.replace(k, v)
    return text.lower()

# ================= BUSCA POR PALAVRAS-CHAVE =============
def search_keywords(pergunta):
    normalized_question = remove_accents(pergunta)
    words = normalized_question.split()

    for key, value in campus_dados.items():
        for keyword in value.get("keywords", []):
            keyword_words = remove_accents(keyword).split()
            if all(word in words for word in keyword_words):
                return value.get("info")
    return None  # Retorna None se não encontrar

# ================= FUNÇÃO PRINCIPAL =====================

def perguntar_ia(pergunta):
    contexto_campus = "\n".join([f"{key}: {value['info']}" for key, value in campus_dados.items()])
    prompt = (
        f"Você é um assistente virtual especializado no IFSP Campus Salto. "
        f"Responda de forma concisa e objetiva a qualquer pergunta sobre o campus, fornecendo respostas completas diretamente relacionadas. "
        f"Use frases naturais, sem símbolos ou caracteres especiais, apenas letras e acentos normais. "
        f"Contexto: {contexto_campus} "
        f"Pergunta: {pergunta}"
    )

    try:
        resposta = genai.GenerativeModel('gemini-2.5-pro').generate_content(prompt)
        texto = resposta.text.strip()
        # Se a resposta for vazia ou conter apenas mensagens genéricas, usar fallback
        if not texto or texto.lower() in ["não sei", "desculpe, não sei", "não posso responder", "não tenho informação"]:
            fallback = search_keywords(pergunta)
            if fallback:
                print("[FALLBACK] IA não respondeu corretamente, usando palavras-chave.")
                return fallback
            else:
                return "Desculpe, não tenho uma resposta para isso."
        return texto
    except Exception as e:
        print(f"[ERRO IA] {e}")
        fallback = search_keywords(pergunta)
        if fallback:
            print("[FALLBACK] Erro na IA, usando palavras-chave.")
            return fallback
        return "Desculpe, não tenho uma resposta para isso."


# ================= FLASK APP ============================
app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    pergunta = data.get("pergunta")
    if not pergunta:
        return jsonify({"resposta": "Pergunta não fornecida"}), 400

    resposta = perguntar_ia(pergunta)
    return jsonify({"resposta": resposta})

if __name__ == "__main__":
    app.run(port=3000, debug=True)
