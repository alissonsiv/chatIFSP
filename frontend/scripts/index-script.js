// Alterna o modo escuro/claro
function toggleDarkMode() {
  const modoIcon = document.getElementById('modo-icon');
  const chatLogo = document.getElementById('chatifsp');

  document.body.classList.toggle('dark-mode');
  const modoEscuroAtivo = document.body.classList.contains('dark-mode');
  localStorage.setItem('modo', modoEscuroAtivo ? 'escuro' : 'claro');

  if (modoIcon) {
      modoIcon.src = modoEscuroAtivo ? '../images/logoifspEscuro.png' : '../images/logoifspClaro.png';
      modoIcon.alt = modoEscuroAtivo ? 'Modo escuro' : 'Modo claro';
  }

  if (chatLogo) {
      chatLogo.src = modoEscuroAtivo ? '../images/chatifspEscuro.png' : '../images/chatifspClaro.png';
      chatLogo.alt = modoEscuroAtivo ? 'Logo Chat IFSP Escuro' : 'Logo Chat IFSP Claro';
  }
}

// Inicializa tema salvo e anima elementos
window.addEventListener('DOMContentLoaded', () => {
  const modoSalvo = localStorage.getItem('modo') || 'claro';
  const modoIcon = document.getElementById('modo-icon');
  const chatLogo = document.getElementById('chatifsp');

  document.body.classList.toggle('dark-mode', modoSalvo === 'escuro');

  if (modoIcon) {
      modoIcon.src = modoSalvo === 'escuro' ? '../images/logoifspEscuro.png' : '../images/logoifspClaro.png';
      modoIcon.alt = modoSalvo === 'escuro' ? 'Modo escuro' : 'Modo claro';
  }

  if (chatLogo) {
      chatLogo.src = modoSalvo === 'escuro' ? '../images/chatifspEscuro.png' : '../images/chatifspClaro.png';
      chatLogo.alt = modoSalvo === 'escuro' ? 'Logo Chat IFSP Escuro' : 'Logo Chat IFSP Claro';
  }

  // Observer para animar elementos visíveis
  const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
          entrada.target.classList.toggle('visivel', entrada.isIntersecting);
      });
  }, { threshold: 0.6 });

  document.querySelectorAll('.aparecer').forEach(el => observador.observe(el));
});
