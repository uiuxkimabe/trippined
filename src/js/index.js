/*? no js js needed from me */

const hamBtn = document.querySelector('.hamBtn')
const menu = document.querySelector('nav .menu')
hamBtn.addEventListener('click',()=> menu.classList.toggle('show'))