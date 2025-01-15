const cardEl = document.getElementById("card");
const thankEl = document.getElementById("thank");
const submitEl = document.getElementById("submit");
const buttons = Array.from(document.querySelectorAll(".rating"));

function addActive (e) {
  e.currentTarget.classList.add("active");
}

function removeActive(button) {
  button.classList.remove("active");
}

function checkActive(e) {
  return e.currentTarget.classList.contains("active");
}

buttons.forEach((button, i, arr) => {
  button.addEventListener("click", (e) => {
    if (checkActive(e)) {
      e.currentTarget.classList.remove("active");
    } else {
      arr.forEach(removeActive);
      addActive (e)
    }
  });
});

submitEl.addEventListener('click', (e) => {
  let hasActive = false;
  let rate;

  buttons.forEach((button) => {
    if (button.classList.contains('active')) {
      rate = button.innerHTML; 
      hasActive = !hasActive;
    }
  
  })
  if (hasActive) {
    const thankRatingEl = document.querySelector(".thank__rating");
    cardEl.classList.add("disable");
    thankEl.classList.remove("disable");
    thankRatingEl.innerHTML = `You selected ${rate} out of 5`
  } 
})


