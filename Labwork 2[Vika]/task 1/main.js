let input = prompt('Введіть число, яке більще 100');

while (isValidatedValue(input)) {
    input = prompt('Введіть число, яке більще 100');
}

function isValidatedValue(value) {
    if (value == null) {
        return false;
    }
    number = parseInt(value, 10);
    if (isNaN(number)) {
        return false;
    }
    return number < 100;
}
