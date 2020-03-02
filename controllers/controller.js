"use strict";
function createCar(plate, brand, color) {
    // VARIABLES ---------------------------------------------------------------------------------
    var carOutput = document.querySelector("#carInfo");
    var wheelsOutput = document.querySelector("#wheelsInfo");
    var wheelsInput = document.querySelector("#wheelsInput");
    var inputPlate = document.querySelector("#inputPlate"), inputBrand = document.querySelector("#inputBrand"), inputColor = document.querySelector("#inputColor");
    var brandWheel1 = document.querySelector("#brandWheel1"), brandWheel2 = document.querySelector("#brandWheel2"), brandWheel3 = document.querySelector("#brandWheel3"), brandWheel4 = document.querySelector("#brandWheel4"), diameterWheel1 = document.querySelector("#diameterWheel1"), diameterWheel2 = document.querySelector("#diameterWheel2"), diameterWheel3 = document.querySelector("#diameterWheel3"), diameterWheel4 = document.querySelector("#diameterWheel4");
    // END VARIABLES -------------------------------------------------------------------------------
    showInputWheels();
    checkWheels();
    var car = new Car(inputPlate.value, inputBrand.value, inputColor.value);
    carOutput.classList.add("alert", "alert-info");
    carOutput.innerHTML = "CAR:</br> PLATE:" + car.plate
        + "</br> COLOR: " + car.color + "</br> BRAND: " + car.brand;
    // FUNCTIONS -----------------------------------------------------------------------------------
    function showInputWheels() {
        wheelsInput.classList.remove("invisible");
        wheelsInput.classList.add("visible");
    }
    ;
    function checkWheels() {
        car.addWheel(new Wheel(diameterWheel1, brandWheel1.value));
        wheelsOutput.innerHTML = "WHEELS: " + JSON.stringify(car.wheels);
    }
    ;
    // END FUNCTIONS ---------------------------------------------------------------------------------
}
