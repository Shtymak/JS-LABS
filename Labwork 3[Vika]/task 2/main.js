function Total(startValue = null) {
    this.value = startValue || 0
    this.read = read.bind(this)
}

function read(value) {
    const input = parseInt(prompt('Введіть число: '))
    if (isNaN(input) || !input) {
        return;
    }
    this.value += input
    return value;
}

const obj = new Total(10)
obj.read()
obj.read()
obj.read()
alert(JSON.stringify(obj))