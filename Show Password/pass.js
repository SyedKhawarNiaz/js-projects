let password = document.querySelector("#password");
let icon = document.querySelector("i");
icon.addEventListener("click", () => {
  if (password.value == "") {
    alert("Add Password");
  } else if (password.type == "password") {
    password.type = "text";
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  } else {
    password.type = "password";
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});
    