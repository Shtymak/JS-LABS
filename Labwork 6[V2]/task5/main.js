class Animal {
    static animals = new Array();
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Animal.animals = [...Animal.animals, this];
    }
}

class Dog extends Animal {
    constructor(name, age, children = []) {
        super(name, age);
        this.children = children;
    }
    pushChild(child) {
        this.children.push(child);
    }
}
class Cow extends Animal {
    constructor(name, age, children = []) {
        super(name, age);
        this.children = children;
    }
    pushChild(child) {
        this.children.push(child);
    }
}

class Cat extends Animal {
    constructor(name, age, children = []) {
        super(name, age);
        this.children = children;
    }
    pushChild(child) {
        this.children.push(child);
    }
}

const murka1 = new Cat('Мурка1', 5); ///          murka1
const murka2 = new Cat('Мурка2', 5); ///              |_murka2
const murka3 = new Cat('Мурка3', 5); ///                  |_murka4
const murka4 = new Cat('Мурка4', 5); ///                      |_murka5
const murka5 = new Cat('Мурка5', 5); ///              |_murka3

murka1.pushChild(murka2);
murka1.pushChild(murka3);
murka2.pushChild(murka4);
murka4.pushChild(murka5);

dog1 = new Dog('Dog1', 5);
dog2 = new Dog('Dog2', 8);
dog3 = new Dog('Dog3', 1);
dog4 = new Dog('Dog4', 4);
dog5 = new Dog('Dog5', 2);
dog6 = new Dog('Dog6', 6);
dog7 = new Dog('Dog7', 11);

dog7.pushChild(dog1); /// dog7
dog7.pushChild(dog2); ///   |_dog1
dog7.pushChild(dog4); ///   |_dog2
dog4.pushChild(dog3); ///dog4
dog6.pushChild(dog5); ///   |_dog3
///dog6 parent of dog5

cow1 = new Cow('Cow1', 5);
cow2 = new Cow('Cow2', 11);
cow3 = new Cow('Cow3', 1);
function calcAge() {
    return {
        catAge: Animal.animals.reduce((total, cur) => {
            if (cur instanceof Cat) {
                return total + cur.age;
            }
            return total;
        }, 0),
        dogAge: Animal.animals.reduce((total, cur) => {
            if (cur instanceof Dog) {
                return total + cur.age;
            }
            return total;
        }, 0),
        cowAge: Animal.animals.reduce((total, cur) => {
            if (cur instanceof Cow) {
                return total + cur.age;
            }
            return total;
        }, 0),
        animalsAge: Animal.animals.reduce((total, cur) => {
            return total + cur.age;
        }, 0),
    };
}

alert(`Вік тварин: ${JSON.stringify(calcAge())}`);
