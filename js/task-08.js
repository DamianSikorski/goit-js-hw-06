const loginForm = document.querySelector(".login-form");
const sumbitButton = document.querySelector(`[type="submit"]`);
const emailInput = document.querySelector(`[type="email"]`);
const passwordInput = document.querySelector(`[type="password"]`);

class colectUserInfo {
  constructor(email, password) {
    this.name = email;
    this.password = password;
  }
}

let user;

const submit = (e) => {
  if (emailInput.value == "" || passwordInput.value == "") {
    alert("Wszystkie pola powinny zostać wypełnione!");
    e.preventDefault();
  } else {
    e.preventDefault();
    user = new colectUserInfo(emailInput.value, passwordInput.value);
    console.log(user);
    loginForm.reset();
    console.log("Strona nie została przeładowana!");
  }
};

const test = () => {
  console.log(user);
};

sumbitButton.addEventListener("click", submit);
