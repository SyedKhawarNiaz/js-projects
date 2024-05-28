let btn = document.querySelector("button");
let img = document.querySelector("img");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (btn.innerHTML.includes("On")) {
    img.src =
      "https://cdn.pixabay.com/photo/2016/11/23/17/59/light-1854093_960_720.jpg";
    btn.innerHTML = "Turn Of";
  }else {
  img.src =
      "https://cdn.pixabay.com/photo/2017/05/05/17/21/bulb-2287759_1280.jpg";
    btn.innerHTML = "Turn On";
  }
});
