// main price berisi class untuk wadah harga modal

class Price {
  basicPrice; // Harga Dasar Villa
  comWd; // Komisi Hari Biasa
  comWe; // Komisi Hari WeekEnd
  sellPrice; // Harga Jual (Setelah dikali Komisi)
  guideCommision = 150000; // Komisi Tetap Bagi Guider
  // Harga Week Day
  weekDay() {
    this.sellPrice = this.basicPrice * this.comWd + this.guideCommision;
    return this.sellPrice;
  }
  // Harga Week End
  weekEnd() {
    this.sellPrice = this.basicPrice * this.comWe + this.guideCommision;
    return this.sellPrice;
  }
}

// MENAMPILKAN HARGA VILLA - VILLA DIBERANDA
const hargaWd = document.querySelectorAll(".priceWd");
const hargaWe = document.querySelectorAll(".priceWe");

function showPrice(params, basic, comWd, comWe, index) {
  params = new Price();
  params.basicPrice = basic;
  params.comWd = comWd;
  params.comWe = comWe;
  let showWd = params.weekDay();
  let showWe = params.weekEnd();
  hargaWd[index].innerHTML = showWd.toLocaleString("id-ID");
  hargaWe[index].innerHTML = showWe.toLocaleString("id-ID");
}
