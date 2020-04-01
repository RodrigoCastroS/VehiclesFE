"use strict";
var car;
function createCar() {
    var inputPlate = document.querySelector("#inputPlate"), inputBrand = document.querySelector("#inputBrand"), inputColor = document.querySelector("#inputColor");
    inputPlate = inputPlate.value.toUpperCase();
    var checkPlate = new RegExp(/(\d{4})([^AEIOU]{3})/g);
    if (inputPlate == "") {
        alert("No puedes dejar el campo de matrícula");
    }
    else if (!checkPlate.test(inputPlate)) {
        alert("La matrícula tiene que tener 4 numeros y 3 letras. Ej: 2222XRZ");
    }
    else {
        var wheelsShow = document.querySelector("#wheelsShow");
        var carOutput = document.querySelector("#carInfo");
        car = new Car(inputPlate, inputBrand.value, inputColor.value);
        // Shows the wheels inputs
        wheelsShow.classList.remove("invisible");
        wheelsShow.classList.add("visible");
        carOutput.classList.add("alert", "alert-info");
        carOutput.innerHTML = "CAR:</br> PLATE: " + car.plate
            + "</br> COLOR: " + car.color + "</br> BRAND: " + car.brand;
    }
}
function checkWheels() {
    var wheelInput = document.querySelectorAll(".wheel");
    var wheelsOutput = document.querySelector("#wheelsInfo");
    for (var i = 0; i < 4; i++) {
        var brandWheel = document.querySelector("#brandWheel" + (i + 1));
        var diameterWheel = document.querySelector("#diameterWheel" + (i + 1));
        if (diameterWheel.value == "") {
            alert("Por favor rellena diametro de la rueda" + (i + 1));
        }
        else {
            diameterWheel = parseFloat(diameterWheel.value);
            if (diameterWheel > 0.4 || diameterWheel < 2) {
                car.addWheel(new Wheel(diameterWheel, brandWheel.value));
                wheelsOutput.innerHTML += "<strong>Wheel " + (i + 1) + "</strong> Brand:  " + car.wheels[i].brand + " Diameter: " + car.wheels[i].diameter + "</br>";
            }
            else {
                alert("El diametro de la ruerda " + (i + 1) + " no es correcto");
                wheelsOutput.innerHTML = " ";
            }
        }
    }
    wheelsOutput.classList.add("alert", "alert-secondary");
    console.log(car.wheels);
}
;
