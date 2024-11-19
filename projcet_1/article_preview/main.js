const shareBtn1El = document.querySelector(".share_button1");
const shareBtn2El = document.querySelector(".share_button2");
const authorEl = document.querySelector(".author");
const shareEl = document.querySelector(".share__click");

shareBtn1El.addEventListener("click", () => {
  if (window.innerWidth < 600) {
    authorEl.classList.add("disable");
    shareEl.classList.remove("disable");
  } else {
    shareEl.classList.toggle("disable");
  }
});
shareBtn2El.addEventListener("click", () => {
  if (window.innerWidth) {
    authorEl.classList.remove("disable");
    shareEl.classList.add("disable");
  }
});

