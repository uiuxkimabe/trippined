const bookDate = document.querySelectorAll("form .date");
const qtyDay = document.getElementById("jmlHari");
const totalPayment = document.querySelector("totalPayment");

// Menangkap Tanggal Cek In & Cek Out
function pickDate() {
  let cekIn = new Date(bookDate[0].value).getDate();
  let cekOut = new Date(bookDate[1].value).getDate();
  let result = cekOut - cekIn;
  qtyDay.value = result;
  console.info(cekIn, cekOut, qtyDay);
}

bookDate.forEach((element) => {
  element.addEventListener("change", () => {
    pickDate();
  });
});
