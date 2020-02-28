
function createCar(plate:string,brand:string,color:string){

    let carInfo: HTMLHeadingElement = document.querySelector("#carInfo") as HTMLHeadingElement;
    let wheelsInfo: HTMLHeadingElement = document.querySelector("#wheelsInfo") as HTMLHeadingElement;
    let inputPlate: any = document.querySelector("#inputPlate");
    let inputBrand: any = document.querySelector("#inputBrand");
    let inputColor: any = document.querySelector("#inputColor");
    
    plate = inputPlate.value;

    let car = new Car(plate,inputBrand.value,inputColor.value);
    //    let plateValue =  inputPlate.value;
    console.log(plate);
    
    car.addWheel(new Wheel(4,"SEAT"));

    carInfo.classList.add("alert","alert-info");
    
    carInfo.innerHTML = "CAR:</br> PLATE:"  + car.plate 
    + "</br> COLOR: " + car.color + "</br> BRAND: " + car.brand;

    wheelsInfo.innerHTML = "WHEELS: " + JSON.stringify(car.wheels);

   
}

