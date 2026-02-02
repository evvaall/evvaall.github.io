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
        'https://www.instagram.com/#reactivated',
        '_blank'
      );
    }
  });
});


// Ligar
function ligar() {
  window.location.href = 'tel:+244957847477';
}
