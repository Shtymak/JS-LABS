function range(a, b) {
    return Array.apply(0, Array(b)).map((element, index) => index + a);
}

function sum(args) {
    return [...args].reduce((item, total) => total + item, 0);
}

console.log(sum(range(1, 5)));
