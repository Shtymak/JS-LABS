function cityN(name, population) {
    this.name = name;
    this.population = population;
    this.getName = function () {
        return this.name;
    };
    this.exportStr = function () {
        return `name = ${this.getName()} \npopulation = ${this.population}`;
    };
}

const Uzhorod = new cityN('Ужгород', 115e3);
alert(Uzhorod.exportStr());
