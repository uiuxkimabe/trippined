/*? no js js needed from me */
const priceWd = document.querySelectorAll(".priceWd");
const priceWe = document.querySelectorAll(".priceWe");
const rmCard = document.querySelectorAll(".rm-card");

// desctructuring price dan room card
let [prWdA, prWdB, prWdC, prWdD] = priceWd; // Harga WeekDay
let [prWeA, prWeB, prWeC, prWeD] = priceWe; // Harga Week End
let [villaA, villaB, villaC, villaD] = rmCard; //Nama Villa

// Display Harga di Beranda
let displayPriceWd;
let displayPriceWe;

// Villa A
{
  const villaA = new Price();
  villaA.basicPrice = 1000000;
  villaA.percentWd = 3;
  villaA.percentWe = 3.3;
  displayPriceWd = villaA.weekDay();
  displayPriceWe = villaA.weekEnd();
  prWdA.innerHTML = displayPriceWd.toLocaleString("id-ID");
  prWeA.innerHTML = displayPriceWe.toLocaleString("id-ID");
  console.table(displayPriceWd, displayPriceWe, prWdA);
}
