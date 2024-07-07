/*? no js js needed from me */

const hamBtn = document.querySelector('.hamBtn')
const menu = document.querySelector('nav .menu')
hamBtn.addEventListener('click',()=> menu.classList.toggle('show'))

const pinnedOn = document.querySelector('.list-villa')
console.info(pinnedOn)


class ListVilla {
    constructor(name, host) {
        this.villaName = name;
        this.guide = host
    }

    unit() {
        const box = document.createElement('div')
        pinnedOn.append(box)
        box.setAttribute('class', 'all standard')
        box.style.height = '300px'
        box.style.border = '1px solid black'
        box.addEventListener('click',()=> alert('oke'))
    }
}

const villa1 = new ListVilla('hagomo', 'rani')
villa1.unit('villa 1')
const villa2 = new ListVilla('hagomo', 'rani')
villa2.unit('villa 2')