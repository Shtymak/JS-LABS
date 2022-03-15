const filterInt = (value) =>
    /^[-+]?(\d+|Infinity)$/.test(value) ? true : false;

function getQuestion(value) {
    if (filterInt(value) === false) {
        alert('Значення не було числом');
        return false;
    }
    return parseInt(value) <= 100 ? false : true;
}

let value = prompt('Введіть число, яке більше 100');
while (getQuestion(value) === false) {
    value = prompt('Введіть число, яке більше 100');
}
