// Klik Navigator
const hamBtn = document.querySelector(".hamBtn");
const navigator = document.querySelector(".navigator");
hamBtn.addEventListener("click", () => {
  navigator.classList.toggle("open");
});

// Masukan Rincian Villa Dengan Memanggil Funtion dengan Parameter Berikut
// ** params = nama villa (tanpa spasi)
// ** basic = harga villa
// ** comWd = komisi week day villa
// ** comWe = komisi week end villa
// ** index = nomor index villa

// Contoh : showPrice(villax,1000000,2,2.5,0)

// Tampilkan Harga di Beranda
{
  const villaA = new Price();
  showPrice(villaA, 1000000, 2, 2.5, 0);
}
{
  const villaB = new Price();
  showPrice(villaB, 1500000, 2, 2.5, 1);
}
{
  const villaC = new Price();
  showPrice(villaC, 1200000, 2, 2.5, 2);
}
{
  const villaD = new Price();
  showPrice(villaD, 900000, 2, 2.5, 3);
}
{
  const villaE = new Price();
  showPrice(villaE, 1300000, 2, 2.5, 4);
}
{
  const villaF = new Price();
  showPrice(villaF, 1100000, 2, 2.5, 5);
}
