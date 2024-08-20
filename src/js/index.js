// Menu Btn

const menu = document.querySelector('nav .menu')
const menuBtn = document.querySelector('nav .socmed .menuBtn')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show')
})

// Tampilkan nama villa dan 

const price = document.querySelectorAll('.card .caption .price-list .price')
const captionVilla = document.querySelectorAll('.caption h3')
const capacity = document.querySelectorAll('.card .caption .max-pax .capacity')
const imgSlide = document.querySelectorAll('.card .img-slide')



console.info(price[0])

class ListVilla {
    villaName;
    priceWd;
    priceWe;
    capacity;
    priceShow(param) {
        price[param].innerHTML = `${this.priceWd} - ${this.priceWe} / Night`
        captionVilla[param].innerHTML = this.villaName
        capacity[param].innerHTML = `Up to ${this.capacity} Pax`
    }
}
