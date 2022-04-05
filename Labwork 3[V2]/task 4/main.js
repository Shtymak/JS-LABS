function isEqualDeep(first, second) {
    try {
        if(!first || !second) {
            return false
        }
        if (first === second) {
            return true
        }
        if (JSON.stringify(first) === JSON.stringify(second)) {
            return true
        }
        for (const prop in Object(second)) {
            if (!(prop in Object(second)) || !isEqualDeep(first[prop], second[prop])) {
                return false
            }
        }
        return true
    }
    catch (error)
    {
        console.log(error)
    }

}

const Justin = {
    name: 'Justin',
    age: 27,
    address: {
        country: 'USA',
        state: 'Man',
        city: 'Crashwil',
        street: 'Wash',
        house: {
            number: 26,
            entrance: 1,
            apartment: 36,
        }
    }
}

const b = {
    is: 'is', k: {
        s: 99,
        x: 25
    }
}

const similarWithJustin = {
    name: 'Justin',
    age: 27,
    address: {
        country: 'USA',
        state: 'Man',
        city: 'Crashwil',
        street: 'Wash',
        house: {
            number: 26,
            entrance: 1,
            apartment: 36,
        }
    }
}

const changerPeriodInJustin = {
    age: 27,//position changed
    name: 'Justin',//position changed
    address: {
        country: 'USA',
        state: 'Man',
        city: 'Crashwil',
        street: 'Wash',
        house: {
            number: 26,
            entrance: 1,
            apartment: 36,
        }
    }
}

const changerValueInJustin = {
    name: 'Justin',
    age: 35, //changed
    address: {
        country: 'USA',
        state: 'Man',
        city: 'Crak', //changed
        street: 'Wash',
        house: {
            number: 26,
            entrance: 1,
            apartment: 36,
        }
    }
}
console.log(isEqualDeep(Justin, b))//false
console.log(isEqualDeep(Justin, similarWithJustin))//true
console.log(isEqualDeep(Justin, changerPeriodInJustin))//true
console.log(isEqualDeep(Justin, changerValueInJustin))//false