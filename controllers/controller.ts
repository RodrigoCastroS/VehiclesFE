
 
function createCar(plate:string,brand:string,color:string){

// VARIABLES ---------------------------------------------------------------------------------
    let carOutput: HTMLHeadingElement = document.querySelector("#carInfo") as HTMLHeadingElement;
    let wheelsOutput: HTMLHeadingElement = document.querySelector("#wheelsInfo") as HTMLHeadingElement;
    let wheelsInput: HTMLHtmlElement = document.querySelector("#wheelsInput") as HTMLHtmlElement;

    let inputPlate: any = document.querySelector("#inputPlate"),
        inputBrand: any = document.querySelector("#inputBrand"),
        inputColor: any = document.querySelector("#inputColor");

    let brandWheel1: string = document.querySelector("#brandWheel1"),
        brandWheel2: string = document.querySelector("#brandWheel2"),
        brandWheel3: any = document.querySelector("#brandWheel3"),
        brandWheel4: any = document.querySelector("#brandWheel4"),
        diameterWheel1: number = document.querySelector("#diameterWheel1"),
        diameterWheel2: any = document.querySelector("#diameterWheel2"),
        diameterWheel3: any = document.querySelector("#diameterWheel3"),
        diameterWheel4: any = document.querySelector("#diameterWheel4");

// END VARIABLES -------------------------------------------------------------------------------


    showInputWheels();
    checkWheels();

    let car = new Car(inputPlate.value,inputBrand.value,inputColor.value);
    carOutput.classList.add("alert","alert-info");
    carOutput.innerHTML = "CAR:</br> PLATE:"  + car.plate 
    + "</br> COLOR: " + car.color + "</br> BRAND: " + car.brand;
    
    // FUNCTIONS -----------------------------------------------------------------------------------
    function showInputWheels (){
        wheelsInput.classList.remove("invisible");
        wheelsInput.classList.add("visible");
        
    };

    function checkWheels(){
        car.addWheel(new Wheel(diameterWheel1, brandWheel1.value));  
        wheelsOutput.innerHTML = "WHEELS: " + JSON.stringify(car.wheels);
        

    };
// END FUNCTIONS ---------------------------------------------------------------------------------
    



}
