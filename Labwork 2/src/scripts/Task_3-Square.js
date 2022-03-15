function getSquare(lenght, height = lenght) {
    return lenght * height;
}

const l = prompt('Введіть ширину: ');
const h = prompt('Введіть довжину: ');
alert(`Один параметр: ${getSquare(+l)}`);
alert(`Два параметри:  ${getSquare(+l, +h)}`);
