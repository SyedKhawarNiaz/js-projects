let boxes = document.querySelectorAll(".boxes");
let imgbox = document.querySelector(".innerbox");

imgbox.addEventListener("dragstart", (e) => {
    // e.preventDefault();
  console.log("drag start", e);
});

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover", e);
  });
  box.addEventListener("drop", (e) => {
      e.preventDefault();
    e.target.append(imgbox);
    console.log("drop", e);
  });
});
