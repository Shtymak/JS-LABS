class Animal {
    static instanses = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Animal.instanses = [...Animal.instanses, this];
    }
}
class Cow extends Animal {
    static instanses = [];
    constructor(name, age, children = []) {
        super(name, age);
        this.children = children;
        Cow.instanses = [...Cow.instanses, this];
    }
    addChild(child) {
        if (child instanceof Cow) this.children = [...this.children, child];
    }
}

class Dog extends Animal {
    static instanses = [];
    constructor(name, age, children = []) {
        super(name, age);
        this.children = children;
        Dog.instanses = [...Dog.instanses, this];
    }
    addChild(child) {
        if (child instanceof Dog) this.children = [...this.children, child];
    }
}

class Cat extends Animal {
    static instanses = [];
    constructor(name, age, children = []) {
        super(name, age);
        this.children = children;
        Cat.instanses = [...Cat.instanses, this];
    }
    addChild(child) {
        if (child instanceof Cat) this.children = [...this.children, child];
    }
}

const betti = new Cow('Betti', 5);
const murka = new Cow('Мурка', 5);
const murka2 = new Cow('Мурка2', 5);
betti.addChild(murka);
murka.addChild(murka2);
betti.addChild(new Cow('Фурка', 5));
betti.addChild(new Cow('Бурка', 4));
murka2.addChild(new Cow('Мурка3', 5));

const ben = new Cat('Ben', 5);
const murchik = new Cat('Мурчик', 5);
ben.addChild(murchik);

const bobik = new Dog('Бобик', 7);

function CalculateAge() {
    return {
        ageOfCows: Cow.instanses.reduce((total, cow) => total + cow.age, 0),
        ageOfDogs: Dog.instanses.reduce((total, dog) => total + dog.age, 0),
        ageOfCats: Cat.instanses.reduce((total, cat) => total + cat.age, 0),
        totalAge: Animal.instanses.reduce(
            (total, animal) => total + animal.age,
            0
        ),
    };
}
console.log(CalculateAge());
