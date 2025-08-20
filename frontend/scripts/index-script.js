function toggleDarkMode() {
    const modoIcon = document.getElementById('modo-icon');
    const outraImagem = document.getElementById('chatifsp');
  
    document.body.classList.toggle('dark-mode');
  
    const modoEscuroAtivo = document.body.classList.contains('dark-mode');
  
    localStorage.setItem('modo', modoEscuroAtivo ? 'escuro' : 'claro');
  
    if (modoEscuroAtivo) {
      modoIcon.src = '../images/logoifspEscuro.png';
      modoIcon.alt = 'Modo escuro';
      outraImagem.src = '../images/chatifspEscuro.png';
      outraImagem.alt = 'Logo Chat IFSP Escuro';
    } else {
      modoIcon.src = '../images/logoifspClaro.png';
      modoIcon.alt = 'Modo claro';
      outraImagem.src = '../images/chatifspClaro.png';
      outraImagem.alt = 'Logo Chat IFSP Claro';
    }
  }
  
window.addEventListener('DOMContentLoaded', () => {
    const modoSalvo = localStorage.getItem('modo');
  
    if (modoSalvo === 'escuro') {
      document.body.classList.add('dark-mode');
  
      document.getElementById('modo-icon').src = '../images/logoifspEscuro.png';
      document.getElementById('modo-icon').alt = 'Modo escuro';
      document.getElementById('chatifsp').src = '../images/logoifspClaro.png';
      document.getElementById('chatifsp').alt = 'Logo Chat IFSP Escuro';
    }
});

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
      } else {
        entrada.target.classList.remove('visivel');
      }
    });
}, 

{
    threshold: 0.6 
});
  
document.querySelectorAll('.aparecer').forEach((el) => {
    observador.observe(el);
});
  