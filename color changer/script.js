let buttons = document.querySelectorAll(".buttons");
let body = document.body;
for (const button of buttons) {
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      //   body.style.backgroundColor = "gray";
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "brown") {
      //   body.style.backgroundColor = "gray";
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "black") {
      //   body.style.backgroundColor = "gray";
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      //   body.style.backgroundColor = "gray";
      body.style.backgroundColor = e.target.id;
    }
  });
}

// document.addEventListener("DOMContentLoaded", function() {
//     gsap.from(".buttons", {
//       y: 100,
//       stagger: 0.3,
//       duration: 1.5,
//       opacity: 0,
//       ease: "power3.out"
//     });
//   });
