// Animação ao entrar na tela
const reveals = document.querySelectorAll('.servico');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));


// WhatsApp
const whatsappIcon = document.querySelector('img[src*="/assets/whatsapp"]');
if (whatsappIcon) {
  whatsappIcon.addEventListener('click', () => {
    window.open('https://wa.me/244957847477', '_blank');
  });
}


// Redes sociais
document.querySelectorAll('.contact').forEach(icon => {
  icon.addEventListener('click', () => {
    const rede = icon.dataset.rede;

    if (rede === 'facebook') {
      window.open(
        'https://www.facebook.com/profile.php?id=61571858821505',
        '_blank'
      );
    }

    if (rede === 'instagram') {
      window.open(
        'https://www.instagram.com/frany.evandro/',
        '_blank'
      );
    }
  });
});


// Ligar
function ligar() {
  window.location.href = 'tel:+244957847477';
}

document.getElementById('btn_contactar').onclick = function() {

  if (window.innerWidth < 600){
    const fotos = document.querySelectorAll('.foto');
    const paragrafos = document.querySelectorAll(".txto_completo");
    paragrafos.forEach(
      paragrafo=>{
        if (!paragrafo.style.maxHeight || paragrafo.style.maxHeight === '4rem'){
          paragrafo.style.maxHeight = '150px';
        } else{
          paragrafo.style.maxHeight = '4rem';
        };
      }
    );
    fotos.forEach(
      foto=>{
        const estilo = window.getComputedStyle(foto).display;
        if (estilo === "none"){
          foto.style.display = "block";
        } else{
          foto.style.display = "none";
        };
      }
    );
  }
};
