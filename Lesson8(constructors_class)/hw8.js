// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
    let user1 = new User(3,'Maks', 'Shved', '@mazila.ua', +380502345123);
    let user2 = new User(2,'Andriy', 'Luzan', '@ukr.ua', +380632368123);
    let user3 = new User(6,'Cris', 'James', '@abrikos.ua', +38097234612);
    let user4 = new User(9,'Taras', 'Kozak', '@kokos.ua', +380662345009);
    let user5 = new User(5,'Jesica', 'Alba', '@keks.ua', +380662355788);
    let user6 = new User(2,'Monica', 'Beluchy', '@sto.ua', +380662345006);
    let user7 = new User(1,'Jenifer', 'Loper', '@bounty.ua', +380992345001);
    let user8 = new User(7,'Alica', 'Moor', '@writer.ua', +380324566222);
    let user9 = new User(5,'Mark', 'Twen', '@bbc.ua', +380673313455);
    let user10 = new User(8,'Tom', 'Cruz', '@actor.ua', +380504433678);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
console.log(user6);
console.log(user7);
console.log(user8);
console.log(user9);
console.log(user10);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
users.push(
    new User(3,'Maks', 'Shved', '@mazila.ua', +380502345123),
    new User(2,'Andriy', 'Luzan', '@ukr.ua', +380632368123),
    new User(6,'Cris', 'James', '@abrikos.ua', +380972346125),
    new User(9,'Taras', 'Kozak', '@kokos.ua', +380662345009),
    new User(5,'Jesica', 'Alba', '@keks.ua', +380662355788),
    new User(2,'Monica', 'Beluchy', '@sto.ua', +380662345006),
    new User(1,'Jenifer', 'Loper', '@bounty.ua', +380992345001),
    new User(7,'Alica', 'Moor', '@writer.ua', +380324566222),
    new User(5,'Mark', 'Twen', '@bbc.ua', +380673313455),
    new User(8,'Tom', 'Cruz', '@actor.ua', +380504433678)
);
console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter((user) => (user.id % 2===0)));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((user1, user2) => user1.id - user2.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
        const clients = [
            new Client(3, 'Maks', 'Shved', '@mazila.ua', +380502345123, ['butter', 'sandwich']),
            new Client(2, 'Andriy', 'Luzan', '@ukr.ua', +380632368123, ['ananas', 'malone']),
            new Client(6, 'Cris', 'James', '@abrikos.ua', +380972346125, ['apple', 'orange', 'cherry']),
            new Client(9, 'Taras', 'Kozak', '@kokos.ua', +380662345009, ['cheese', 'beer']),
            new Client(5, 'Jesica', 'Alba', '@keks.ua', +380662355788, ['bananas', 'kokos', 'stawberry', 'watermelon']),
            new Client(2, 'Monica', 'Beluchy', '@sto.ua', +380662345006, ['meet', 'brea']),
            new Client(1, 'Jenifer', 'Loper', '@bounty.ua', +380992345001, ['milk', 'juice']),
            new Client(7, 'Alica', 'Moor', '@writer.ua', +380324566222, ['beer', 'pistachios']),
            new Client(5, 'Mark', 'Twen', '@bbc.ua', +380673313455, ['chips', 'pistachios', 'jamon']),
            new Client(8, 'Tom', 'Cruz', '@actor.ua', +38050450023, ['cola', 'fanta', 'sprite'])
        ]

// console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((Client1, Client2) => Client1.order.length - Client2.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drivers = [];
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`-------------INFO------------`)
        console.log(`model: ${this.model}`)
        console.log(`producer: ${this.producer}`)
        console.log(`year: ${this.year}`)
        console.log(`maxSpeed: ${this.maxSpeed}`)
        console.log(`volume: ${this.volume}`)
        console.log(`drivers: ${JSON.stringify(this.drivers)}`)
        console.log(`-------------INFO------------`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (name, age, category) {
        this.drivers.push(new Driver(name, age, category));
    }
}
function Driver(name, age, category){
    this.name = name;
    this.age = age;
    this.category = category;
}
    const car1 = new Car('X6', 'BMW', '2008', 230, 3.0);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
car1.info();
car1.changeYear(2023);
car1.info();
car1.addDriver('Stas', 30,'A,B,C');
car1.addDriver('Maks', 45,'B,C');
car1.info()
// const car2 = new Car('X6', 'BMW', '2008', 230, 3.0);
// const car3 = new Car('X6', 'BMW', '2008', 230, 3.0);
// const car4 = new Car('X6', 'BMW', '2008', 230, 3.0);
// const car5 = new Car('X6', 'BMW', '2008', 230, 3.0);
// const car6 = new Car('X6', 'BMW', '2008', 230, 3.0);

// console.log(this.Car)
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.drivers = [];
    }
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        info() {

            console.log(`model: ${this.model}`);
            console.log(`producer: ${this.producer}`);
            console.log(`year: ${this.year}`);
            console.log(`maxSpeed: ${this.maxSpeed}`);
            console.log(`volume: ${this.volume}`);
            console.log(`drivers: ${JSON.stringify(this.drivers)}`)

        };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (name, age, category) {
        this.drivers.push(new Driver(name, age, category));
}
}
        const car2 = new Car('X5', 'BMW', '2007', 300, 2.9);
        car2.drive();
        car2.info();
        car2.increaseMaxSpeed(60);
        car2.info();
car2.changeYear(2021);
car2.info();
car2.addDriver('Dima', 50, 'C,C1')
car2.info()
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeeddr
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Human{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Popelushka extends Human {
    constructor(name, age,) {
        super(name, age)
        this.foot = foot;
    }
}
class Princ extends Human {
    constructor(name, age,) {
        super(name, age)
        this.boot = boot;
    }

    findPrinces1(arr) {
        for (const princes of arr) {
            if (princes.foot === this.boot){
                return princes;
            }
        }
    }
    findPrinces2(arr){
        return arr
            .sort((a, b) => a.age - b.age)
            .find((princes) => princes.foot === this.boot);
    }
}

    const popArr = [
     new Popelushka('Nika', 23, 35),
     new Popelushka('Zoe', 22, 33),
     new Popelushka('Mira', 30, 38),
     new Popelushka('Liza', 18, 32),
     new Popelushka('Nona', 20, 35),
     new Popelushka('Lola', 38, 40),
     new Popelushka('Zaza', 29, 36),
     new Popelushka('Zlata', 33, 34),
     new Popelushka('Monica', 17, 31),
     new Popelushka('Olya', 19, 32),
    ];
const prince = new Princ('Artur', 19, 35)
console.log(prince.findPrinces1(popArr));
console.log(prince.findPrinces2(popArr));

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку