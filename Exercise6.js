// Yasaman Mirvahabi Sabet
// 101217770
// Lab 2

// Exercise 6:

class Car {
    constructor(model,year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}
// Example:
// New Car instance
const car1 = new Car('Pontiac Firebird', 1976);
console.log(car1.details());
// New Sedan instance
const sedan1 = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan1.info());