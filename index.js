const mobileBtn = document.querySelector('.mobile-menu');
const navLinks =document.querySelector('.nav-mobile');

mobileBtn.addEventListener('click', ()=>{
  mobileBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
})