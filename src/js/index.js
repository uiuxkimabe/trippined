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


class ListVilla {
    villaName;
    priceWd;
    priceWe;
    capacity;
    priceShow(param) {
        createImgPreview(param)
        price[param].innerHTML = `${this.priceWd.toLocaleString('id-ID')} - ${this.priceWe.toLocaleString('id-ID')} / Night`
        captionVilla[param].innerHTML = this.villaName
        capacity[param].innerHTML = `Up to ${this.capacity} Pax`
    }
}

function createImgPreview(paramVilla) {
    const imgElement = document.createElement('img')
    imgElement.setAttribute('src', `./src/assets/villa-${paramVilla}/0.jpg`) // Foto pertama diberi nama "0"
    imgSlide[paramVilla].appendChild(imgElement)
    return 
}