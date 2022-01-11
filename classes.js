class Car {
    //constructor 
    constructor(engine) {
        this.engine = engine;
    }
    //function 
    disp() {
        console.log("Function displays Engine is  :   " + this.engine);
    }
}
//create an object 
var obj = new Car("nexon");
//access the field 
console.log("Reading attribute value Engine as :  " + obj.engine);
//access the function
obj.disp();
