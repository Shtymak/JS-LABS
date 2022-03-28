function isEqualDeep(a, b) {
    if (a === b) {
        return true;
    }
    const objectType = "object"
    if (a == null || typeof (a) != objectType ||
        b == null || typeof (b) != objectType) {
        return false;
    }

    let propertiesInA = 0, propertiesInB = 0;
    for (let property in a) {
        propertiesInA += 1;
    }
    for (let property in b) {
        propertiesInB += 1;
        if (!(property in a) || !isEqualDeep(a[property], b[property])) {
            return false;
        }
    }
    return propertiesInA == propertiesInB;
}

const a = {
    a: 1,
    b: 2,
    c: {
        a: 1,
        b: {
            exp: "20"
        }
    }
}

const b = {a: 'hello', b: 2, c: 55}

const aClone = {
    a: 1,
    b: 2,
    c: {
        a: 1,
        b: {
            exp: "20"
        }
    }
}

const aSecondClone = {
    c: {
        a: 1,
        b: {
            exp: "20"
        }
    },
    a: 1,
    b: 2
}
console.log(isEqualDeep(a, b))//false
console.log(isEqualDeep(a, aClone))//true
console.log(isEqualDeep(a, aSecondClone))//true