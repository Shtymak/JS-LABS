class Worker {
    #name;
    #surname;
    #rate;
    #days;

    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }

    getName() {
        return this.#name;
    }

    getSurname() {
        return this.#surname;
    }

    getRate() {
        return this.#rate;
    }

    getDays() {
        return this.#days;
    }

    getSalary() {
        return this.#days * this.#rate;
    }
}
const worker1 = new Worker('Вася', 'Пупкін', 20, 10);
const worker2 = new Worker('Петя', 'Пупкін', 30, 15);
console.log(
    [worker1, worker2].reduce((total, worker) => total + worker.getSalary(), 0)
);
