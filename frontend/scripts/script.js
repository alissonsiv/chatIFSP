const campoInput = document.querySelector('.campo-pergunta input');
const areaMensagens = document.querySelector('.area-mensagens');
const botaoEnviar = document.querySelector('.botao-enviar');
const botaoAudio = document.querySelector('.botao-audio');
const botaoMicrofone = document.querySelector('.botao-microfone');
const logo = document.querySelector('.cabecalho img');

let primeiraMensagem = true;
let audioAtivo = true;
let reconhecimento;

// ======== MODO ESCURO/CLARO ========
window.addEventListener('DOMContentLoaded', () => {
    const modoSalvo = localStorage.getItem('modo');
    if (modoSalvo === 'escuro') document.body.classList.add('dark-mode');
});

logo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('modo', document.body.classList.contains('dark-mode') ? 'escuro' : 'claro');
});

// ======== ADICIONAR MENSAGEM ========
function adicionarMensagem(texto, classe) {
    if (primeiraMensagem) {
        areaMensagens.classList.remove('oculta');
        primeiraMensagem = false;
    }

    const div = document.createElement('div');
    div.classList.add('mensagem', classe);

    if (classe === 'bot') {
        const imagemBot = document.createElement('img');
        imagemBot.src = '../images/megatron.png';
        imagemBot.alt = 'Megatron';
        imagemBot.classList.add('imagem-bot');

        const textoMensagem = document.createElement('span');
        textoMensagem.innerText = texto;

        div.appendChild(imagemBot);
        div.appendChild(textoMensagem);
    } else {
        div.innerText = texto;
    }

    areaMensagens.appendChild(div);
    areaMensagens.scrollTop = areaMensagens.scrollHeight;

    if (classe === 'bot' && audioAtivo) falarTexto(texto);
}

// ======== CARREGAMENTO MODERNO COM ANIMAÇÃO DO BONECO ========
function adicionarMensagemCarregando() {
    if (primeiraMensagem) {
        areaMensagens.classList.remove('oculta');
        primeiraMensagem = false;
    }

    const div = document.createElement('div');
    div.classList.add('mensagem', 'bot');
    div.id = 'loading-msg';

    // Boneco animado
    const imagemBot = document.createElement('img');
    imagemBot.src = '../images/megatron.png';
    imagemBot.alt = 'Megatron';
    imagemBot.classList.add('imagem-bot', 'animando-bot');

    // Bolinhas de carregamento
    const loadingContainer = document.createElement('div');
    loadingContainer.classList.add('loading-dots');

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        loadingContainer.appendChild(dot);
    }

    div.appendChild(imagemBot);
    div.appendChild(loadingContainer);
    areaMensagens.appendChild(div);
    areaMensagens.scrollTop = areaMensagens.scrollHeight;
}

function removerMensagemCarregando() {
    const div = document.getElementById('loading-msg');
    if (div) div.remove();
}

// ======== SÍNTESE DE VOZ ========
function falarTexto(texto) {
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    utterance.rate = 3.7;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
}

// ======== FUNÇÃO PARA CHAMAR BACKEND ========
async function enviarPergunta(pergunta) {
    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pergunta })
        });

        const data = await response.json();
        return data.resposta;
    } catch (error) {
        console.error('Erro ao chamar o backend:', error);
        return 'Desculpe, ocorreu um erro ao tentar obter a resposta.';
    }
}

// ======== BOTÃO ENVIAR ========
botaoEnviar.addEventListener('click', async () => {
    const texto = campoInput.value.trim();
    if (!texto) return;

    adicionarMensagem(texto, 'usuario');
    campoInput.value = '';

    adicionarMensagemCarregando(); // mostra carregamento
    const resposta = await enviarPergunta(texto);
    removerMensagemCarregando(); // remove carregamento

    adicionarMensagem(resposta, 'bot');
});

// ======== ENTER PARA ENVIAR ========
campoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        botaoEnviar.click();
    }
});

// ======== BOTÃO DE ÁUDIO ========
botaoAudio.addEventListener('click', () => {
    audioAtivo = !audioAtivo;
    const img = botaoAudio.querySelector('img');
    img.src = audioAtivo ? '../images/audio.png' : '../images/mudo.png';
    img.alt = audioAtivo ? 'Ligar áudio' : 'Mutar áudio';
    window.speechSynthesis.cancel();
});

// ======== MICROFONE ========
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    reconhecimento = new SpeechRecognition();
    reconhecimento.lang = 'pt-BR';
    reconhecimento.continuous = false;
    reconhecimento.interimResults = false;

    reconhecimento.onresult = (event) => {
        campoInput.value = event.results[0][0].transcript;
        botaoEnviar.click();
    };

    reconhecimento.onerror = (event) => console.error('Erro no reconhecimento de voz:', event.error);

    botaoMicrofone.addEventListener('click', () => {
        reconhecimento.start();
        const img = botaoMicrofone.querySelector('img');
        img.src = '../images/microfone-ativo.png';
        img.alt = 'Gravando...';
        reconhecimento.onend = () => {
            img.src = '../images/microfone.png';
            img.alt = 'Usar microfone';
        };
    });
} else {
    console.warn('Reconhecimento de voz não suportado neste navegador.');
}
