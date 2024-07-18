/*? no js js needed from me */

// Click Menu Button

const hamBtn = document.querySelector('.hamBtn')
const menu = document.querySelector('nav .menu')


document.addEventListener('click', (e) => {
    if (!hamBtn.contains(e.target)) {
        menu.classList.remove('show')
    } else {
        menu.classList.add('show')
    }
});

const cardAll = document.querySelectorAll('.list-villa .card')
const villaName = document.querySelectorAll('.card .villa-name')
const cardDetail = document.querySelector('#detail')
const close = document.querySelector('.close')
cardAll.forEach(element => {
    element.addEventListener('click', () => {
        cardDetail.classList.add('show');
    })
});

close.addEventListener('click', () => {
    cardDetail.classList.remove('show');
    
})