// main price berisi class untuk wadah harga modal

class Price {
  basicPrice;
  percentWd;
  percentWe;
  sellPrice;
  // Harga Week Day
  weekDay() {
    this.sellPrice = this.basicPrice * this.percentWd;
    return this.sellPrice;
  }
  // Harga Week End
  weekEnd() {
    this.sellPrice = this.basicPrice * this.percentWe;
    return this.sellPrice;
  }
}
