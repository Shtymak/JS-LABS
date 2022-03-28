function Without(object, ...args) {
    [...args].forEach(prop=> delete object[prop])
}
const object = {a: 1, b: "e", c: 8}
Without(object, 'a', 'b')
console.log(object) // {c: 8 }