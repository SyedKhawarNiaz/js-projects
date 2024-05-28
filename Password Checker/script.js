let password = document.querySelector("#pass");
let show = document.querySelector(".hightlight");

password.addEventListener("input", () => {
  let passvalue = password.value;
  if (passvalue.length < 8) {
    show.style.color = "red";
    show.textContent = "Length is smaller than 8 characters";
  } else if (
    passvalue.search(/[a-z]/) === -1 ||
    passvalue.search(/[A-Z]/) === -1
  ) {
    show.style.color = "red";
    show.textContent =
      "Password must contain both lowercase and uppercase letters";
  } else if (passvalue.search(/[0-9]/) == -1) {
    show.style.color = "red";
    show.textContent = "Password must contain Numeric characters";
  } else {
    show.style.color = "black";
    show.textContent = "Strong Password*";
  }
});
