function multiplyNumeric(obj) {
    Object.entries(obj).forEach(([key, value])=> {
        if(!isNaN(+value)){
            obj[key] *= 2
        }
    })
    return obj
}

const obj = {
    foo: 1,
    bb: 45,
    fox: 'Lio',
    v: -4
}

alert(JSON.stringify(multiplyNumeric(obj)))