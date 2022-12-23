// Task 1: Code a Person class
class Person{
    constructor(name="Tom", age=20, energy=100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy = this.energy + 10;
    }

    doSomethingFun() {
        this.energy = this.energy - 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy,xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp = xp + 10;
    }
    
}

// Task 3: Code an intern object, run methods
function intern() {
    var inter = new Worker(name="Bob",age= 21,energy= 110, xp=0,hourlyWage=10);
    inter.goToWork();
   
    return inter;
}

// Task 4: Code a manager object, methods
function manager() {
    var man = new Worker("Alice", 30, 120, 100, 30);
    man.doSomethingFun();
    return man;
}