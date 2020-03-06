
// VARIABLES ---------------------------------------------------------------------------------

let car: Car;
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
    
    
    function createCar(){
        let inputPlate: any = document.querySelector("#inputPlate"),
            inputBrand: any = document.querySelector("#inputBrand"),
            inputColor: any = document.querySelector("#inputColor");       

        let wheelsShow: HTMLHeadingElement = document.querySelector("#wheelsShow") as HTMLHeadingElement;
        let carOutput: HTMLHeadingElement = document.querySelector("#carInfo") as HTMLHeadingElement;
        car = new Car(inputPlate.value, inputBrand.value, inputColor.value);

        // Shows the wheels inputs
        wheelsShow.classList.remove("invisible");
        wheelsShow.classList.add("visible");
        
        carOutput.classList.add("alert","alert-info");
        carOutput.innerHTML = "CAR:</br> PLATE:"  + car.plate 
        + "</br> COLOR: " + car.color + "</br> BRAND: " + car.brand;
    }
    
    function checkWheels(){
      
        let brandWheel: any = document.querySelector("#brandWheel1"),
            brandWheel2: any = document.querySelector("#brandWheel2"),
            brandWheel3: any = document.querySelector("#brandWheel3"),
            brandWheel4: any = document.querySelector("#brandWheel4"),
            diameterWheel: any = document.querySelector("#diameterWheel1"),
            diameterWheel2: number | any = document.querySelector("#diameterWheel2"),
            diameterWheel3: number | any = document.querySelector("#diameterWheel3"),
            diameterWheel4: number | any = document.querySelector("#diameterWheel4");
        
        let wheelsOutput: HTMLHeadingElement = document.querySelector("#wheelsInfo") as HTMLHeadingElement;
           
        
            for (let i = 1; i < 5; i++) {
                
                car.addWheel(new Wheel(diameterWheel.value, brandWheel.value));
                wheelsOutput.innerHTML = "WHEELS: " + diameterWheel.value  ;
                
            }
            
            // wheelsOutput.innerHTML = "WHEELS: " + car.wheels[i].brand + car.wheels[i].diameter;
            
    };
    
// FUNCTIONS -----------------------------------------------------------------------------------
// END FUNCTIONS ---------------------------------------------------------------------------------