// Klik Navigator
const hamBtn = document.querySelector(".hamBtn");
const navigator = document.querySelector(".navigator");
hamBtn.addEventListener("click", () => {
  navigator.classList.toggle("open");
});

/*? no js js needed from me */
const priceWd = document.querySelectorAll(".priceWd");
const priceWe = document.querySelectorAll(".priceWe");
const rmCard = document.querySelectorAll(".rm-card");

// desctructuring price dan room card
let [prWdA, prWdB, prWdC, prWdD, prWdE, prWdF] = priceWd; // Harga WeekDay
let [prWeA, prWeB, prWeC, prWeD, prWeE, prWeF] = priceWe; // Harga Week End
let [villaA, villaB, villaC, villaD, villaE, villaF] = rmCard; //Nama Villa

// Display Harga di Beranda
let displayPriceWd;
let displayPriceWe;

// Villa A
{
  villaA = new Price();
  villaA.basicPrice = 1000000;
  villaA.percentWd = 2;
  villaA.percentWe = 2.3;
  displayPriceWd = villaA.weekDay();
  displayPriceWe = villaA.weekEnd();
  prWdA.innerHTML = displayPriceWd.toLocaleString("id-ID");
  prWeA.innerHTML = displayPriceWe.toLocaleString("id-ID");
}

// Villa B
{
  villaB = new Price();
  villaB.basicPrice = 1000000;
  villaB.percentWd = 2;
  villaB.percentWe = 2.3;
  displayPriceWd = villaB.weekDay();
  displayPriceWe = villaB.weekEnd();
  prWdB.innerHTML = displayPriceWd.toLocaleString("id-ID");
  prWeB.innerHTML = displayPriceWe.toLocaleString("id-ID");
}

// Villa C
{
  villaC = new Price();
  villaC.basicPrice = 1000000;
  villaC.percentWd = 2;
  villaC.percentWe = 2.3;
  displayPriceWd = villaC.weekDay();
  displayPriceWe = villaC.weekEnd();
  prWdC.innerHTML = displayPriceWd.toLocaleString("id-ID");
  prWeC.innerHTML = displayPriceWe.toLocaleString("id-ID");
}

// Villa D
{
  villaD = new Price();
  villaD.basicPrice = 1000000;
  villaD.percentWd = 2;
  villaD.percentWe = 2.3;
  displayPriceWd = villaD.weekDay();
  displayPriceWe = villaD.weekEnd();
  prWdD.innerHTML = displayPriceWd.toLocaleString("id-ID");
  prWeD.innerHTML = displayPriceWe.toLocaleString("id-ID");
}

// Villa E
{
  villaE = new Price();
  villaE.basicPrice = 1000000;
  villaE.percentWd = 2;
  villaE.percentWe = 2.3;
  displayPriceWd = villaE.weekDay();
  displayPriceWe = villaE.weekEnd();
  prWdE.innerHTML = displayPriceWd.toLocaleString("id-ID");
  prWeE.innerHTML = displayPriceWe.toLocaleString("id-ID");
}

// Villa F
{
  villaF = new Price();
  villaF.basicPrice = 1000000;
  villaF.percentWd = 2;
  villaF.percentWe = 2.3;
  displayPriceWd = villaF.weekDay();
  displayPriceWe = villaF.weekEnd();
  prWdF.innerHTML = displayPriceWd.toLocaleString("id-ID");
  prWeF.innerHTML = displayPriceWe.toLocaleString("id-ID");
}
