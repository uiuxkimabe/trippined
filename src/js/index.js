// Klik Navigator
const hamBtn = document.querySelector(".hamBtn");
const navigator = document.querySelector(".navigator");
hamBtn.addEventListener("click", () => {
  navigator.classList.toggle("open");
});

/*? no js js needed from me */

// Harga ditampilkan di beranda dan detail villa
// displayHarga(variable , harga modal, index, commWd,commWe)

// Villa A
const villaA = new Price();
displayHarga(villaA, 1000000, 0, 2, 2.3);

// Villa B
const villaB = new Price();
displayHarga(villaB, 1500000, 1, 1.8, 2.2);

// Villa C
const villaC = new Price();
displayHarga(villaC, 1800000, 2, 2, 2.1);

// Villa D
const villaD = new Price();
displayHarga(villaD, 600000, 3, 1.5, 2.1);

// Villa E
const villaE = new Price();
displayHarga(villaE, 1000000, 4, 1.5, 2.1);

// Villa F
const villaF = new Price();
displayHarga(villaE, 1000000, 5, 2, 2.1);
