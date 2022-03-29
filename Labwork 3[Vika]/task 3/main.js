function cityN(name, population){
    this.name = name
    this.population = population
    this.getName = function (){
        return this.name
    }

    this.exportToString = function (){
        return `Name: ${name} \nPopulation: ${population}`
    }
}

const NewYork = new cityN("NewYork", 4000000)
alert(NewYork.exportToString())
