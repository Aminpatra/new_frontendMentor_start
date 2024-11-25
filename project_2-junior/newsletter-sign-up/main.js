const formEl = document.getElementById("form");
const containerEl = document.getElementById("container");
const successEl = document.getElementById("success");
const dismissEl = document.getElementById("dismiss");
const inputEl = document.getElementById("email");

function validateEmail(email) {
  if (!email) return "Email is required.";

  const hasAtSign = /[@]/g;
  if (!hasAtSign.test(email)) return "Email must have '@' sign";

  const hasRules = /^[A-z]+[@][a-z]+[\.][a-z]{1,3}/g;
  if (!hasRules.test(email)) return "This is not a valid email form";

  return "";
}

function handelSubscribe(e) {
  e.preventDefault();

  const printEmailEl = document.getElementById("printEmail");
  const { email } = Object.fromEntries(new FormData(e.target).entries());
  const emailErrorMessageEl = document.getElementById("errorEmailMessage");

  const emailErrorMessage = validateEmail(email);

  if (emailErrorMessage) {
    emailErrorMessageEl.innerHTML = emailErrorMessage;
    emailErrorMessageEl.classList.add("error");
    inputEl.classList.add("error");
  } else {
    emailErrorMessageEl.innerHTML = "Valid Email";
    containerEl.classList.add("disable");
    successEl.classList.remove("disable");
    printEmailEl.innerHTML = email;

    emailErrorMessageEl.classList.remove("error");
    inputEl.classList.remove("error");

    emailErrorMessageEl.classList.add("succ");
    inputEl.classList.add("succ");
  }
}

function returnBackToMainPage(e) {
  containerEl.classList.remove("disable");
  successEl.classList.add("disable");
}

formEl.addEventListener("submit", handelSubscribe);
dismissEl.addEventListener("click", returnBackToMainPage);
