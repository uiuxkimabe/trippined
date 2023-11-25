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

// Close Invoice
const notif = document.getElementById("notif");
const closeInv = document.getElementById("closeInv");
closeInv.addEventListener("click", () => {
  notif.style.display = "none";
});

// Copy Invoice
const copybooking = document.querySelectorAll(".copybooking");


const scriptURL =
  "https://script.google.com/macros/s/AKfycbyor4S0P7DLiKSUB3ZWduLFkOHomipkVWC-GrXqsQZQnX0xxl9HmNdHh8V4zGiAAggWRA/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const invoice = document.getElementById("invoice");
  invoice.value = getPwd();
  notif.style.display = "block";
  console.info(invoice.value);
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
