//Ім'я
let nameArea = document.querySelector(".name");

nameArea.addEventListener("input", function() {
    let nameValue = nameArea.value;

    if(nameValue.length > 0) {
        nameArea.classList.remove("incorrect");
        nameArea.classList.add("correct");
    } else if(nameValue.length === 0) {
        nameArea.classList.remove("correct");
        nameArea.classList.remove("incorrect");
    } else {
        nameArea.classList.remove("correct");
        nameArea.classList.add("incorrect");
    }
});



//Номер
let numberArea = document.querySelector(".number");

numberArea.addEventListener("input", function() {
    let numberValue = numberArea.value;

    if(numberValue.includes("+380") && numberValue.length === 13) {
        numberArea.classList.remove("incorrect");
        numberArea.classList.add("correct");
    } else if(numberValue.length === 0) {
        numberArea.classList.remove("correct");
        numberArea.classList.remove("incorrect");
    } else {
        numberArea.classList.remove("correct");
        numberArea.classList.add("incorrect");
    }
});



//Пошта
let emailArea = document.querySelector(".email");

emailArea.addEventListener("input", function() {
    let emailValue = emailArea.value;

    if(emailValue.includes("@gmail.com")) {
        emailArea.classList.remove("incorrect");
        emailArea.classList.add("correct");
    } else if(emailValue.length === 0) {
        emailArea.classList.remove("correct");
        emailArea.classList.remove("incorrect");
    } else {
        emailArea.classList.remove("correct");
        emailArea.classList.add("incorrect");
    }
});



//Пароль
let passwordArea = document.querySelector(".password");

passwordArea.addEventListener("input", function() {
    let passwordValue = passwordArea.value;

    if (passwordValue.length >= 8) {
        passwordArea.classList.remove("incorrect");
        passwordArea.classList.add("correct");
    } else if(passwordValue.length === 0) {
        passwordArea.classList.remove("correct");
        passwordArea.classList.remove("incorrect");
    } else {
        passwordArea.classList.remove("correct");
        passwordArea.classList.add("incorrect");
    }
});



//Кнопка
let checkButton = document.querySelector(".button");

checkButton.addEventListener("click", function() {
    let alertWin = document.querySelector(".alert");

    if(nameArea.classList.contains("correct") && numberArea.classList.contains("correct") && emailArea.classList.contains("correct") && passwordArea.classList.contains("correct")) {
        window.location.href = "form/index.html"
    } else {
        nameArea.classList.add("incorrect");
        numberArea.classList.add("incorrect");
        emailArea.classList.add("incorrect");
        passwordArea.classList.add("incorrect");
        alertWin.classList.add("active");

        setTimeout(function() {
            alertWin.classList.remove("active");
        }, 3000);
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