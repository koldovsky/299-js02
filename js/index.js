// // loop with counter
// // for (let i = 100; i > 0; i-=1) {
// //     if (i % 2 !== 0) {
// //         continue;
// //     } 
// //     document.write(i);
// //     document.write('<br>');
// // }  

// // let i = 0;
// // while (i <= 100) {
// //     document.write(i + '<br>');
// //     i++;
// // }

// // let i = 0;
// // do {
// //     document.write(i + '<br>');
// //     i++;
// // } while (i <= 100)

function prn(message) {
    document.write(message + '<br>');
}

// let cars = ['BMW X7', 'Toyota Corolla'];
// cars[2] = 'ZAZ Sens';
// cars.push('Skoda Fabia');
// cars.push('Mercedes Vito');
// prn(cars.length);
// // prn(cars);

// // for (let i = 0; i < cars.length; i++) {
// //     prn(cars[i]);
// // }

// // cars.forEach(prn);

// // cars.forEach(function(el) {
// //   const formattedEl = '<b>' + el + '</b>';
// //   prn(formattedEl);
// // });

// // cars.forEach( el => prn(`<b>${el}</b>`) );

// // prn(cars.sort());

// let nums = [];
// for (let i = 0; i < 100; i++) {
//     nums.push(i);
// }
// prn( nums.sort( (a, b) => a - b ) );

let myCars = {
    everyday: 'Nissan Leaf',
    offroad: 'Jeep Wrangler',
    speed: 'Ferrari LaFerrari'
};

// prn(myCars['offroad']);

myCars['favourite'] = 'Ford Mustang';

let counter = 0;
for (let key in myCars) {
    prn(myCars[key]);
    counter++;
}

prn('Number of items: ' + counter);

let mustang = {
    color: 'Red',
    name: 'Mustang'
};
mustang.year = 1999;
mustang.sound = function() {
    prn(this.name + ': Beep-beep');
}

mustang.sound();

function Car(name, color, year) {
    this.name = name;
    this.color = color;
    this.year = year;
    this.sound = function() {
        prn(this.name + ': Beep-beep');
    }  
    return this;
}

let leaf = new Car('Leaf', 'blue', 2015);
leaf.sound();

let hummer = new Car('Hummer', 'yellow', 2007);
hummer.sound();

let myGarage = [mustang, leaf, hummer];

prn(myGarage[1].color);

class SuperCar {
    constructor (name, color, year) {
        this.name = name;
        this.color = color;
        this.year = year;
    }
    sound() {
        prn(this.name + ': Beep-beep');
    }  
}

let ferrari = new SuperCar('LaFerrari', 'red', 2017);
ferrari.sound();

let ferrariCalifornia = Object.create(ferrari);
ferrariCalifornia.name = 'California';
ferrariCalifornia.sound();
prn(ferrariCalifornia.color);

