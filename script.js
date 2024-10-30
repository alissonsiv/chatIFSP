// Função para remover acentos e caracteres especiais de uma string
function removeAccents(str) {
    return str.normalize('NFD') 
              .replace(/[\u0300-\u036f]/g, '') 
              .replace(/ç/g, 'c') 
              .replace(/[.,?!;(){}[\]"']/g, ''); 
}

// Função que verifica se as palavras-chave estão presentes nos elementos da árvore de dados
function searchKeywords(keywords, question) {
    const normalizedQuestion = removeAccents(question.toLowerCase()); 
    const questionWords = normalizedQuestion.split(' '); 

    for (const [key, value] of Object.entries(keywords)) { 
        for (const keyword of value.keywords) { 
            const normalizedKeyword = removeAccents(keyword.toLowerCase()); 
            const keywordWords = normalizedKeyword.split(' '); 

            if (keywordWords.every(word => questionWords.includes(word))) {
                return value.info; 
            }
        }
    }
    return null; 
}

// Funções para controlar a animação do robô
let imageIndex = 0; 
let animationInterval;

// Inicia a animação do robô
function startAnimation() {
    const roboImage = document.getElementById('robo-image');
    animationInterval = setInterval(() => {
        imageIndex = (imageIndex + 1) % 10;
        roboImage.src = `imagens/robo/robo${imageIndex + 1}.png`; 
    }, 70); 
}

// Para a animação do robô e reseta sua imagem
function stopAnimation() {
    clearInterval(animationInterval); 
    const roboImage = document.getElementById('robo-image');
    roboImage.src = `imagens/robo/robo.png`;
}

// Reseta e reinicia a animação do robô
function resetAnimation() {
    stopAnimation(); 
    startAnimation(); 
}

// Função para falar a resposta utilizando síntese de voz
function speak(text, rate = 2, pitch = 1) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR'; 
    utterance.rate = rate; 
    utterance.pitch = pitch; 

    utterance.onend = stopAnimation;
    utterance.onerror = (event) => { 
        console.error('Erro na síntese de fala:', event.error);
        stopAnimation(); 
    };

    const voices = window.speechSynthesis.getVoices(); 
    const preferredVoice = voices.find(voice => voice.lang === 'pt-BR') || voices[0]; 
    utterance.voice = preferredVoice; 

    window.speechSynthesis.speak(utterance); 
}

// Função principal para obter a resposta a uma pergunta
function getAnswer() {
    const question = removeAccents(document.getElementById('question').value.toLowerCase()); 
    let response = searchKeywords(keywords, question); 

    if (!response) {
        response = 'Desculpe, não tenho uma resposta para isso.'; 
    }

    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.className = 'message user'; 
    userMessage.textContent = document.getElementById('question').value;
    chatBox.appendChild(userMessage); 

    setTimeout(() => { 
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot'; 
        botMessage.textContent = response; 
        chatBox.appendChild(botMessage); 

        chatBox.scrollTop = chatBox.scrollHeight; 

        window.speechSynthesis.cancel(); 
        resetAnimation(); 
        speak(response); 
    }, 300); 
}

// Configuração do reconhecimento de fala
let recognition;
const micButton = document.getElementById('mic-button'); 
const questionInput = document.getElementById('question');

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
    recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false; 

    recognition.onresult = (event) => { 
        const speechResult = event.results[0][0].transcript; 
        questionInput.value = speechResult; 
        getAnswer(); 
    };

    recognition.onstart = () => micButton.classList.add('listening');
    recognition.onend = () => micButton.classList.remove('listening');
    recognition.onerror = (event) => { 
        console.error('Erro no reconhecimento de fala:', event.error);
        micButton.classList.remove('listening'); 
    };
} else {
    alert('Seu navegador não suporta a Web Speech API'); 
}

// Evento para o botão do microfone
micButton.addEventListener('click', () => {
    if (recognition) {
        recognition.start();
    }
});

// Evento para o botão de enviar, que obtém a resposta
document.getElementById('send-button').addEventListener('click', getAnswer);

// Aguarda o carregamento completo do DOM para adicionar eventos
document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkModeButton = document.getElementById('dark-mode-button'); 
    const logoImage = document.getElementById('logo-image'); 

    // Evento que alterna entre o modo claro e escuro
    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            toggleDarkModeButton.textContent = '🌜'; 
            logoImage.src = 'imagens/logo/logo2.png'; 
        } else {
            toggleDarkModeButton.textContent = '🌞'; 
            logoImage.src = 'imagens/logo/logo.png'; 
        }
    });
});
