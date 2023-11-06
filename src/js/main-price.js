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

