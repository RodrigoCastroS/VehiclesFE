"use strict";
function createCar(plate, brand, color) {
    var carInfo = document.querySelector("#carInfo");
    var wheelsInfo = document.querySelector("#wheelsInfo");
    var inputPlate = document.querySelector("#inputPlate");
    var inputBrand = document.querySelector("#inputBrand");
    var inputColor = document.querySelector("#inputColor");
    plate = inputPlate.value;
    var car = new Car(plate, inputBrand.value, inputColor.value);
    //    let plateValue =  inputPlate.value;
    console.log(plate);
    car.addWheel(new Wheel(4, "SEAT"));
    carInfo.classList.add("alert", "alert-info");
    carInfo.innerHTML = "CAR:</br> PLATE:" + car.plate
        + "</br> COLOR: " + car.color + "</br> BRAND: " + car.brand;
    wheelsInfo.innerHTML = "WHEELS: " + JSON.stringify(car.wheels);
}
