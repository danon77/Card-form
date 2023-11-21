/*let password = document.querySelector(".password");

password.addEventListener("input", function() {
    let passwordValue = password.value;

    if(passwordValue.length >= 8) {
        password.classList.add("new");
        password.classList.remove("delate");
    } else if(passwordValue.length === 0) {
        password.classList.remove("new");
        password.classList.remove("delate");
    } else {
        password.classList.remove("new");
        password.classList.add("delate");
    }
});*/

let loginButton = document.querySelector(".button");

let numberArea = document.querySelector(".number");
let emailArea = document.querySelector(".email");
let passwordArea = document.querySelector(".password")

loginButton.addEventListener("click", function() {
    let numberValue = numberArea.value;
    let emailValue = emailArea.value;
    let passwordValue = passwordArea.value;

    if(numberValue.length == 0 || emailValue.length == 0 || passwordValue.length == 0) {
        numberArea.classList.add("delate");
        emailArea.classList.add("delate");
        passwordArea.classList.add("delate");
    } else {
        window.location.href = "../index.html"
    }
});

//Модальне вікно
let linkModel = document.querySelector(".politics__link");
let model = document.querySelector(".model");

linkModel.addEventListener("click", (event) => {
    event.preventDefault();

    if(model.className === "model") {
        model.classList.add("active")
    } else {
        model.classList.remove("active")
    }
});