
//we initialize the car object to make it global
let car: Car;

function createCar(){
    let inputPlate: any = document.querySelector("#inputPlate"),
        inputBrand: any = document.querySelector("#inputBrand"),
        inputColor: any = document.querySelector("#inputColor");
    let checkPlate = new RegExp(/(\d{4})([^AEIOU]{3})/g);  
        inputPlate = inputPlate.value.toUpperCase();

    // Check if the inputPlate field is empty or is a valid plate   
    if(inputPlate == ""){
        alert("No puedes dejar el campo de matrícula");
    }else if(!checkPlate.test(inputPlate)){
        alert("La matrícula tiene que tener 4 numeros y 3 letras. Ej: 2222XRZ");
    }else{
        let wheelsShow: HTMLHeadingElement = document.querySelector("#wheelsShow") as HTMLHeadingElement;
        let carOutput: HTMLHeadingElement = document.querySelector("#carInfo") as HTMLHeadingElement;
        car = new Car(inputPlate, inputBrand.value, inputColor.value);
        // Shows the wheels inputs
        wheelsShow.classList.remove("invisible");
        wheelsShow.classList.add("visible");
        // Outputs the info introduce on the input
        carOutput.classList.add("alert","alert-info");
        carOutput.innerHTML = "CAR:</br> PLATE: "  + car.plate 
        + "</br> COLOR: " + car.color + "</br> BRAND: " + car.brand;
    }    
}

 
function checkWheels(){
    let wheelInput = document.querySelectorAll(".wheel"); 
    let wheelsOutput: HTMLHeadingElement = document.querySelector("#wheelsInfo") as HTMLHeadingElement;
    let countErrors = 0;

    //Empty the fields and wheels array in case they were filled
    wheelsOutput.innerHTML = "";
    wheelsOutput.classList.remove("alert","alert-secondary");
    car.wheels = [];
    
    //Loop to check the input values of every diameter
    for (let i = 0; i < 4; i++) {    
        let diameterWheel: any = document.querySelector("#diameterWheel"+(i+1));
        diameterWheel = parseFloat(diameterWheel.value);

        if(diameterWheel.value == ""){
            alert("Por favor rellena diametro de la rueda" + (i+1));
            countErrors++;
        }else if(diameterWheel < 0.4 || diameterWheel > 2){
            alert("El diametro de la ruerda "+ (i+1) + " no es correcto");
            countErrors++;
        }
    }
    //If the inputs are filled we create the wheels
    if(countErrors == 0){
        for (let i = 0; i < 4; i++) {
            let brandWheel: any = document.querySelector("#brandWheel"+ (i+1));
            let diameterWheel: any = document.querySelector("#diameterWheel"+(i+1));
            diameterWheel = parseFloat(diameterWheel.value);
            
            car.addWheel(new Wheel(diameterWheel, brandWheel.value));
            wheelsOutput.innerHTML += `<strong>Wheel ${i+1}</strong> Brand:  ${car.wheels[i].brand} Diameter: ${car.wheels[i].diameter}</br>`; 
            wheelsOutput.classList.add("alert","alert-secondary");
            
        }
    }
    // console.log(car.wheels);
};
    