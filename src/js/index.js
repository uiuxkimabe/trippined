/*? no js js needed from me */
const priceWd = document.querySelectorAll(".priceWd");
const priceWe = document.querySelectorAll(".priceWe");

priceWd.forEach((element) => {
  const villaA = new Price();
  villaA.basicPrice = 1000000;
  villaA.percentWd = 0.3;
  villaA.percentWe = 0.4;
  element.innerHTML = villaA.weekDay();
});

priceWe.forEach((element) => {
  const villaA = new Price();
  villaA.basicPrice = 1000000;
  villaA.percentWd = 0.3;
  villaA.percentWe = 0.4;
  element.innerHTML = villaA.weekEnd();
});
