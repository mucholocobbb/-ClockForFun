'use strict'

//ES6 SYNTAX

class Car{
    constructor(color){
        this.color = color;
    }
    
    show(){
        console.log(`Машина цвета ${this.color}`);
    }
}

class NewCar extends Car {
    constructor(color, year){
       super(color);
       this.year = year;
    }
    
    newshow(){
        console.log(`Машина ${this.year} года и ${this.color} цвета`);
    }
}

const car = new NewCar("Белого", 1990);
car.show();
car.newshow();
