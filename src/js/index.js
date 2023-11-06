/*? no js js needed from me */
const priceWd = document.querySelectorAll(".priceWd");
const priceWe = document.querySelectorAll(".priceWe");
const rmCard = document.querySelectorAll(".rm-card");

// desctructuring price dan room card
let [prWdA, prWdB, prWdC, prWdD] = priceWd;
let [prWeA, prWeB, prWeC, prWeD] = priceWe;
let [villaA, villaB, villaC, villaD] = rmCard;

// Display Harga di Beranda

// Villa A
{
  const villaA = new Price();
  villaA.basicPrice = 1000000;
  villaA.percentWd = 0.1;
  villaA.percentWe = 0.2;
  let displayPriceWd = villaA.weekDay();
  let displayPriceWe = villaA.weekEnd();
  prWdA.innerHTML = displayPriceWd;
  console.table(displayPriceWd, displayPriceWe, prWdA);
}
