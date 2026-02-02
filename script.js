const reveals = document.querySelectorAll('.servico');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

reveals.forEach(el => observer.observe(el));
document.querySelector('img[src*="/assets/whatsapp"]').onclick = () =>{
  window.open('https://wa.me/+224957847477.', '_blank');
}

document.querySelectorAll('.contact').forEach(icon=>{
  icon.addEventListener('click', ()=>{
    const rede=icon.dataset.rede;
    if (rede==='facebook'){
      window.open('https://www.facebook.com/profile.php?id=61571858821505',  '_blank');
    }
    if (rede==='instagram'){
      window.open('https://www.instagram.com/#reactivated',  '_blank');
    }
  });
});
function ligar(){
  window.lacation.href="tel:+244957847477"
}
