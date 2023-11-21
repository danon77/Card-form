//Номер карти
let numberArea = document.querySelector(".card__number");
let myNumber = document.querySelector(".card__number__button");

myNumber.addEventListener("click", function () {
    let number = "";

    for (let i = 0; i < 16; i++) {
        let gen = Math.floor(Math.random(9) * 10);
        number += gen
    }

    let newNumber = number.split(' ').join('').match(/.{1,4}/g).join(' ');
    numberArea.innerText = newNumber;
});

numberArea.innerText = myNumber.value;

//CVV
let cvvArea = document.querySelector(".card__cvv");
let myCVV = document.querySelector(".cvv__button");

myCVV.addEventListener("click", function () {
    let cvv = "";

    for (let i = 0; i < 4; i++) {
        let genCVV = Math.floor(Math.random(9) * 10);
        cvv += genCVV
    }

    let newCVV = cvv;
    cvvArea.innerText = newCVV;
});

cvvArea.innerText = myCVV.value;

//Рік
let dateArea = document.querySelector(".card__year")
let newDate = document.querySelector(".date__input")

newDate.addEventListener("change", function() {
    let date = newDate.value;

    let inputDate = date.split("-");

    if(inputDate.length === 3) {
        let day = inputDate[2];
        let month = inputDate[1];
        let year = inputDate[0];

        dateArea.innerHTML = month + "/" + year.split("")[year.length - 2] + year.split("")[year.length - 1];
    }
});

//Ім'я користувача
let nameArea = document.querySelector(".name");
let myName = document.querySelector(".name__input")

myName.addEventListener("input", function () {
    let newName = myName.value;
    nameArea.innerText = newName;
});

nameArea.innerText = myName.value;

//Прізвище користувача
let surnameArea = document.querySelector(".surname");
let mySurname = document.querySelector(".surname__input")

mySurname.addEventListener("input", function () {
    let newSurname = mySurname.value;
    surnameArea.innerText = newSurname;
});

surnameArea.innerText = mySurname.value;