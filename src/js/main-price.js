// main price berisi class untuk wadah harga modal

class Price {
  basicPrice;
  percentWd;
  percentWe;
  sellPrice;
  guideCommision = 150000;
  // Harga Week Day
  weekDay() {
    this.sellPrice = this.basicPrice * this.percentWd + this.guideCommision;
    return this.sellPrice;
  }
  // Harga Week End
  weekEnd() {
    this.sellPrice = this.basicPrice * this.percentWe + this.guideCommision;
    return this.sellPrice;
  }
}

// DITAMPILKAN PADA HALAMAN BERANDA
const priceWeekDay = document.querySelectorAll(".caption .priceWd");
const priceWeekEnd = document.querySelectorAll(".caption .priceWe");
let mainDisplayWd;
let mainDisplayWe;

// RINCIAN FUNCTION DISPLAY HARGA
const nameId = document.querySelector(".title h3").textContent;
const villaName = ["Villa A", "Villa B", "Villa C", "Villa D"];
let rmDtlWd = document.querySelector(".title .priceWd");
let rmDtlWe = document.querySelector(".title .priceWe");

// param = berisikan variable baru untuk memanggil class dengan isi new Price()
// price = berisi harga dasara villa [wajib diisi]
// index = berisi index villa yang di seleksi index start [0 - tanpa batas] [wajib isi]
// comWd = berisi persentase komisi yang diinginkan untuk weekday [2 - 2.1] [wajib isi]
// comWe = berisi persentase komisi yang diinginkan untuk weekend [wajib isi]

function displayHarga(param, price, index, comWd, comWe) {
  param = new Price();
  param.basicPrice = price;
  param.percentWd = comWd;
  param.percentWe = comWe;
  mainDisplayWd = param.weekDay();
  mainDisplayWe = param.weekEnd();
  priceWeekDay[index].innerHTML = mainDisplayWd.toLocaleString("id-ID");
  priceWeekEnd[index].innerHTML = mainDisplayWe.toLocaleString("id-ID");
  if (nameId === villaName[index]) {
    rmDtlWd.innerHTML = mainDisplayWd.toLocaleString("id-ID");
    rmDtlWe.innerHTML = mainDisplayWe.toLocaleString("id-ID");
  }
}
