const campoInput = document.querySelector('.campo-pergunta input');
const areaMensagens = document.querySelector('.area-mensagens');
const botaoEnviar = document.querySelector('.botao-enviar');
const botaoAudio = document.querySelector('.botao-audio');
const botaoMicrofone = document.querySelector('.botao-microfone');
const logo = document.querySelector('.cabecalho img');

const botaoConfig = document.getElementById('config-toggle');
const modalConfig = document.querySelector('.config-modal');
const botaoFecharConfig = document.getElementById('config-fechar');
const checkboxAudio = document.getElementById('toggle-audio');
const checkboxModo = document.getElementById('toggle-modo');
const sliderVelocidade = document.getElementById('velocidade-voz');
const spanVelocidade = document.getElementById('velocidade-valor');
const sliderVolume = document.getElementById('volume-voz');
const spanVolume = document.getElementById('volume-valor');

let primeiraMensagem = true;
let audioAtivo = true;
let reconhecimento;

// ===============================
// FUNÇÕES AUXILIARES
// ===============================

// Scroll suave até o final da área de mensagens
function scrollParaFim() {
    areaMensagens.scrollTo({
        top: areaMensagens.scrollHeight,
        behavior: 'smooth'
    });
}

// Atualiza ícone da engrenagem conforme tema
function atualizarIconeEngrenagem() {
    const iconeConfig = document.getElementById('config-icon');
    if (!iconeConfig) return;
    iconeConfig.src = document.body.classList.contains('dark-mode') 
        ? '../images/engrenagem-escuro.png' 
        : '../images/engrenagem.png';
    iconeConfig.alt = document.body.classList.contains('dark-mode') 
        ? 'Configurações - modo escuro' 
        : 'Configurações - modo claro';
}

// Sintetiza voz do bot usando configurações do usuário
function falarTexto(texto) {
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    utterance.rate = parseFloat(localStorage.getItem('velocidadeVoz') || 1);
    utterance.volume = parseFloat(localStorage.getItem('volumeVoz') || 1);
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
}

// ===============================
// INICIALIZAÇÃO
// ===============================
window.addEventListener('DOMContentLoaded', () => {
    // Tema
    const modoSalvo = localStorage.getItem('modo') || 'claro';
    document.body.classList.toggle('dark-mode', modoSalvo === 'escuro');
    if (checkboxModo) checkboxModo.checked = modoSalvo === 'escuro';
    atualizarIconeEngrenagem();

    // Áudio
    const audioSalvo = localStorage.getItem('audioAtivo');
    if (audioSalvo === 'false') {
        audioAtivo = false;
        if (checkboxAudio) checkboxAudio.checked = false;
        botaoAudio.querySelector('img').src = '../images/mudo.png';
    }

    // Velocidade e volume da voz
    const velocidadeSalva = localStorage.getItem('velocidadeVoz') || '1';
    sliderVelocidade.value = velocidadeSalva;
    spanVelocidade.textContent = `${velocidadeSalva}x`;

    const volumeSalvo = localStorage.getItem('volumeVoz') || '1';
    sliderVolume.value = volumeSalvo;
    spanVolume.textContent = `${Math.round(volumeSalvo * 100)}%`;
});

// ===============================
// EVENTOS DE INTERAÇÃO
// ===============================

// Alterna tema clicando na logo
logo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const modoAtual = document.body.classList.contains('dark-mode') ? 'escuro' : 'claro';
    localStorage.setItem('modo', modoAtual);
    checkboxModo.checked = document.body.classList.contains('dark-mode');
    atualizarIconeEngrenagem();
});

// Modal de configurações
botaoConfig.addEventListener('click', () => modalConfig.classList.remove('oculta'));
botaoFecharConfig.addEventListener('click', () => modalConfig.classList.add('oculta'));

// Alterna áudio via modal
checkboxAudio.addEventListener('change', () => {
    audioAtivo = checkboxAudio.checked;
    localStorage.setItem('audioAtivo', audioAtivo);
    const img = botaoAudio.querySelector('img');
    img.src = audioAtivo ? '../images/audio.png' : '../images/mudo.png';
    img.alt = audioAtivo ? 'Ligar áudio' : 'Mutar áudio';
    img.setAttribute('aria-label', img.alt);
    window.speechSynthesis.cancel();
});

// Alterna tema via modal
checkboxModo.addEventListener('change', () => {
    const modoAtual = checkboxModo.checked ? 'escuro' : 'claro';
    document.body.classList.toggle('dark-mode', checkboxModo.checked);
    localStorage.setItem('modo', modoAtual);
    atualizarIconeEngrenagem();
});

// Configurações de voz
sliderVelocidade.addEventListener('input', () => {
    localStorage.setItem('velocidadeVoz', sliderVelocidade.value);
    spanVelocidade.textContent = `${sliderVelocidade.value}x`;
});
sliderVolume.addEventListener('input', () => {
    localStorage.setItem('volumeVoz', sliderVolume.value);
    spanVolume.textContent = `${Math.round(sliderVolume.value * 100)}%`;
});

// ===============================
// MENSAGENS
// ===============================
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
    scrollParaFim();

    if (classe === 'bot' && audioAtivo) falarTexto(texto);
}

function adicionarMensagemCarregando() {
    if (primeiraMensagem) {
        areaMensagens.classList.remove('oculta');
        primeiraMensagem = false;
    }

    const div = document.createElement('div');
    div.classList.add('mensagem', 'bot');
    div.id = 'loading-msg';

    const imagemBot = document.createElement('img');
    imagemBot.src = '../images/megatron.png';
    imagemBot.alt = 'Megatron';
    imagemBot.classList.add('imagem-bot', 'animando-bot');

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
    scrollParaFim();
}

function removerMensagemCarregando() {
    const div = document.getElementById('loading-msg');
    if (div) div.remove();
}

// ===============================
// ENVIO DE PERGUNTAS
// ===============================
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

// Envio via botão ou Enter
botaoEnviar.addEventListener('click', async () => {
    const texto = campoInput.value.trim();
    if (!texto) return;

    // Cancela qualquer fala em andamento
    window.speechSynthesis.cancel();

    adicionarMensagem(texto, 'usuario');
    campoInput.value = '';

    adicionarMensagemCarregando();
    const resposta = await enviarPergunta(texto);
    removerMensagemCarregando();

    adicionarMensagem(resposta, 'bot');
});

campoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        botaoEnviar.click();
    }
});

// ===============================
// ÁUDIO / MICROFONE
// ===============================
botaoAudio.addEventListener('click', () => {
    audioAtivo = !audioAtivo;

    const img = botaoAudio.querySelector('img');
    img.src = audioAtivo ? '../images/audio.png' : '../images/mudo.png';
    img.alt = audioAtivo ? 'Ligar áudio' : 'Mutar áudio';
    img.setAttribute('aria-label', img.alt);

    if (checkboxAudio) checkboxAudio.checked = audioAtivo;
    localStorage.setItem('audioAtivo', audioAtivo);
    window.speechSynthesis.cancel();
});

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
        img.setAttribute('aria-label', 'Gravando...');
        reconhecimento.onend = () => {
            img.src = '../images/microfone.png';
            img.alt = 'Usar microfone';
            img.setAttribute('aria-label', 'Usar microfone');
        };
    });
} else {
    console.warn('Reconhecimento de voz não suportado neste navegador.');
}

// ===============================
// ACESSIBILIDADE
// ===============================
campoInput.setAttribute('aria-label', 'Campo para digitar sua pergunta');
botaoEnviar.setAttribute('aria-label', 'Enviar pergunta');
botaoMicrofone.setAttribute('aria-label', 'Usar microfone');
botaoAudio.setAttribute('aria-label', 'Ligar ou desligar áudio');
botaoConfig.setAttribute('aria-label', 'Abrir configurações');
botaoFecharConfig.setAttribute('aria-label', 'Fechar configurações');
