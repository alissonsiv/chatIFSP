// Aplica o tema (escuro/claro)
function aplicarTema(modo) {
    document.body.classList.toggle('dark-mode', modo === 'escuro');
    const icon = document.getElementById('modo-icon');
    if (!icon) return;

    icon.src = modo === 'escuro' ? '../images/lua.png' : '../images/sol.png';
    icon.alt = modo === 'escuro' ? 'Modo escuro' : 'Modo claro';
    localStorage.setItem('modo', modo);
}

// Alterna tema atual
function alternarTema() {
    const modoAtual = document.body.classList.contains('dark-mode') ? 'escuro' : 'claro';
    aplicarTema(modoAtual === 'claro' ? 'escuro' : 'claro');
}

// Inicializa tema salvo e atualiza logos
window.addEventListener('DOMContentLoaded', () => {
    const modoSalvo = localStorage.getItem('modo') || 'claro';
    const body = document.body;
    const chatLogo = document.getElementById('chatifsp');
    const logoIFSP = document.getElementById('logo-ifsp');
    const toggleCheckbox = document.getElementById('toggle-modo');

    body.classList.toggle('dark-mode', modoSalvo === 'escuro');
    if (chatLogo) chatLogo.src = modoSalvo === 'escuro' ? '../images/chatifspEscuro.png' : '../images/chatifspClaro.png';
    if (logoIFSP) logoIFSP.src = modoSalvo === 'escuro' ? '../images/logoifspEscuro.png' : '../images/logoifspClaro.png';
    if (toggleCheckbox) toggleCheckbox.checked = modoSalvo === 'escuro';
});
