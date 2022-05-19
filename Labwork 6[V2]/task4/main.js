class Worker {
    #rate;
    #days;
    #name;
    #surname;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#days = days;
        this.#rate = rate;
    }
    getSalary() {
        return this.#days * this.#rate;
    }
    getRate() {
        return this.#rate;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getDays() {
        return this.#days;
    }
}

const Ivan = new Worker('Ivan', 'Ivanov', 30, 30);
const Petia = new Worker('Petia', 'Petrov', 20, 20);
const Illia = new Worker('Illia', 'Ivanov', 40, 25);

const workers = [Ivan, Petia, Illia];

const CalcSalary = (workers) => {
    let sum = 0;
    for (let i = 0; i < workers.length; i++) {
        sum += workers[i].getSalary();
    }
    return sum;
};

alert(CalcSalary(workers));
