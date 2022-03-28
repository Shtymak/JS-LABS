function multiplyNumeric(object) {
    for (const key in object) {
        if (!isNaN(+object[key])) {
            object[key] *= 2;
        }
    }
    return object;
}

const object = {a: 1, b: 'box', c:3};
console.log(multiplyNumeric(object))