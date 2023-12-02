const lengtNumb = 6;

function generate(len) {
  const numeric = "0123456789";
  const alphabet = "ABCDEFGHIJKLMOPQRSTUVWXWZ";
  const data = numeric + alphabet;
  let generator = "";
  for (let i = 0; i < len; i++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

function getPwd() {
  const newPwd = generate(lengtNumb);
  console.info(newPwd);
  return newPwd;
}

// AMBIL TANGGAL
const dateCiCo = document.querySelectorAll(".date"); // Tanggal Cek In / Out

// AMBIL HARGA
const priceDtlWd = document.querySelector(".title .priceWd"); // Harga WeekDay
const priceDtlWe = document.querySelector(".title .priceWe"); // Harga WeekEnd
const hargaVilla = document.getElementById("bookprice");
const totalPayment = document.querySelector(".totalPayment");
let days = document.getElementById("days"); // Hidden jml Hari
const jmlHari = document.getElementById("jmlHari");
let result;

function getSetDate() {
  const getCheckIn = new Date(dateCiCo[0].value).getDate();
  const getCheckOut = new Date(dateCiCo[1].value).getDate();
  const getDayIn = new Date(dateCiCo[0].value).getDay(); //[0-6] Sun-Sat
  const getDayOut = new Date(dateCiCo[1].value).getDay(); //[0-6] Sun-Sat
  let nights = getCheckOut - getCheckIn;
  jmlHari.value = nights;
  if (getDayIn === 5 || getDayIn === 6 || getDayIn === 0) {
    result = showWe * nights;
    totalPayment.value = result.toLocaleString("id-ID");
    hargaVilla.value = result
  } else {
    result = showWd * nights;
    totalPayment.value = result.toLocaleString("id-ID");
    hargaVilla.value = result
  }
  return;
}

dateCiCo.forEach((element) => {
  element.addEventListener("change", () => {
    getSetDate();
  });
});

// Close Invoice
const notif = document.getElementById("notif");
const closeInv = document.getElementById("closeInv");
closeInv.addEventListener("click", () => {
  notif.style.display = "none";
});

const boxAgreement = document.querySelector(".agreement");
const agree = document.getElementById("agree").addEventListener("click", () => {
  closeInv.style.background = "#0d922e";
  closeInv.disabled = false;
  boxAgreement.style.display = "none";
  form.reset();
});

// BOOKING TO GOOGLE SHEETS
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyor4S0P7DLiKSUB3ZWduLFkOHomipkVWC-GrXqsQZQnX0xxl9HmNdHh8V4zGiAAggWRA/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const invoice = document.getElementById("invoice");
  invoice.value = getPwd();
  notif.style.position = "fixed";
  notif.style.display = "block";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
