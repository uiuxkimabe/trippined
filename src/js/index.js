/*? no js js needed from me */

// Click Menu Button

const hamBtn = document.querySelector('.hamBtn')
const menu = document.querySelector('nav .menu')
function menuClick() {
    hamBtn.addEventListener('click',()=> menu.classList.toggle('show'))
}


// Class Villa

class ListVilla {
    constructor({numb,name,host,type,priceWd,priceWe}) {
        this.villaNumber = numb
        this.villaName = name;
        this.guide = host
        this.type = type
        this.priceWd = priceWd
        this.priceWe = priceWe
    }

    unit() {
        // Membuat Card Villa
        const pinnedOn = document.querySelector('.list-villa')
        const box = document.createElement('div')
        pinnedOn.append(box)
        box.setAttribute('class', `all ${this.type}`)
        box.style.border = '1px solid black'
        
        // Membuat Isi Card Villa
        // Menambahkan Image
        const boxImg = document.createElement('img')
        box.append(boxImg)
        boxImg.setAttribute('src', `./src/assets/villa-img/${this.villaNumber}/1.jpg`)
        let imgLoc = `img-villa-${this.villaNumber}`
        boxImg.setAttribute('class',`${imgLoc}`)

        // Menambahkan Deskripsi
        const boxCaption = document.createElement('figcaption')
        boxCaption.setAttribute('class', 'd-flex caption')
        const pinnedImg = document.querySelector(`.${imgLoc}`)
        pinnedImg.after(boxCaption)
        
        const villaTitle = document.createElement('h2')
        const textVillaTitle = document.createTextNode(`${this.villaName}`)
        villaTitle.appendChild(textVillaTitle)

        const host = document.createElement('p')
        const hostTex = document.createTextNode(`${this.guide}`)
        host.append(hostTex)
    
        boxCaption.appendChild(villaTitle)
        boxCaption.appendChild(host)
        
        // Menambahkan Harga
        const boxPrice = document.createElement('div')
        boxPrice.setAttribute('class', 'price')
        const pinnedPrice = document.querySelector('.caption')
        pinnedPrice.after(boxPrice)
        const priceText = document.createElement('h3')
        const priceWd = document.createTextNode(`${this.priceWd}`)
        boxPrice.appendChild(priceText)
        priceText.appendChild(priceWd)

        box.addEventListener('click',(e)=> alert(`${e}`))
    }
}


