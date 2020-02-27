"use strict";
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    var result = document.querySelector("#carInfo");
    var inputPlate = document.querySelector("#inputPlate");
    //    let plateValue =  inputPlate.value;
    console.log(inputPlate.value);
    car.addWheel(new Wheel(2, "SEAT"));
    result.innerHTML = "CAR: PLATE: </br>" + car.plate
        + " COLOR: " + car.color + " BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}
