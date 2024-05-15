let qr_input = document.querySelector("#qr-input");
let qr_btn = document.querySelector(".qr-btn");
let qr_img = document.querySelector(".qr-img");
qr_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputvalue = qr_input.value;
  if (!inputvalue) {
    alert("INVALID INPUT VALUE");
  } else {
    qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
  }
});
