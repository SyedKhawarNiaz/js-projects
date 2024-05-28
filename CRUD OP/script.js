let userinput = document.querySelector("input");
let sub_btn = document.querySelector("button");
sub_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (userinput.value === "") {
    alert("Enter value");
  } else {
    let res = userinput.value;
    let show = document.querySelector(".show");
    show.innerHTML = res;
    userinput.value = "";
  }
});
