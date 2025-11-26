const toggle=document.querySelector('[data-toggle]');
const menu=document.querySelector('[data-mobile-menu]');
if(toggle&&menu){toggle.addEventListener('click',()=>{menu.classList.toggle('open')});}
