"use strict";
// VARIABLES ---------------------------------------------------------------------------------
var car;
/*
    let inputPlate: any = document.querySelector("#inputPlate");
    let inputBrand: any = document.querySelector("#inputBrand");
    let inputColor: any = document.querySelector("#inputColor");

    let brandWheel1: any = document.querySelector("#brandWheel" + i),
        brandWheel2: any = document.querySelector("#brandWheel2"),
        brandWheel3: any = document.querySelector("#brandWheel3"),
        brandWheel4: any = document.querySelector("#brandWheel4"),
        diameterWheel1: any = document.querySelector("#diameterWheel1"),
        diameterWheel2: any = document.querySelector("#diameterWheel2"),
        diameterWheel3: any = document.querySelector("#diameterWheel3"),
        diameterWheel4: any = document.querySelector("#diameterWheel4");
    */
//let
// END VARIABLES -------------------------------------------------------------------------------
function createCar() {
    var inputPlate = document.querySelector("#inputPlate"), inputBrand = document.querySelector("#inputBrand"), inputColor = document.querySelector("#inputColor");
    var wheelsShow = document.querySelector("#wheelsShow");
    var carOutput = document.querySelector("#carInfo");
    car = new Car(inputPlate.value, inputBrand.value, inputColor.value);
    // Shows the wheels inputs
    wheelsShow.classList.remove("invisible");
    wheelsShow.classList.add("visible");
    carOutput.classList.add("alert", "alert-info");
    carOutput.innerHTML = "CAR:</br> PLATE:" + car.plate
        + "</br> COLOR: " + car.color + "</br> BRAND: " + car.brand;
}
function checkWheels() {
    var brandWheel = document.querySelector("#brandWheel1"), brandWheel2 = document.querySelector("#brandWheel2"), brandWheel3 = document.querySelector("#brandWheel3"), brandWheel4 = document.querySelector("#brandWheel4"), diameterWheel = document.querySelector("#diameterWheel1"), diameterWheel2 = document.querySelector("#diameterWheel2"), diameterWheel3 = document.querySelector("#diameterWheel3"), diameterWheel4 = document.querySelector("#diameterWheel4");
    var wheelsOutput = document.querySelector("#wheelsInfo");
    for (var i = 1; i < 5; i++) {
        car.addWheel(new Wheel(diameterWheel.value, brandWheel.value));
        wheelsOutput.innerHTML = "WHEELS: " + diameterWheel.value;
    }
    // wheelsOutput.innerHTML = "WHEELS: " + car.wheels[i].brand + car.wheels[i].diameter;
}
;
// FUNCTIONS -----------------------------------------------------------------------------------
// END FUNCTIONS ---------------------------------------------------------------------------------
