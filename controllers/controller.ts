
function createCar(plate:string,brand:string,color:string){
    let car = new Car(plate,color,brand);
    let result: HTMLHeadingElement = document.querySelector("#carInfo") as HTMLHeadingElement;
    let inputPlate: any = document.querySelector("#inputPlate");

//    let plateValue =  inputPlate.value;
    
    console.log(inputPlate.value);
    

    car.addWheel(new Wheel(2,"SEAT"));

    result.innerHTML = "CAR: PLATE: </br>"  + car.plate 
    + " COLOR: " + car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels);

   
}

