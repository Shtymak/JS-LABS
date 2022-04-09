function sum() {
    let array = [];
    let sum = 0;
    let inp = parseFloat(prompt('Число:'));
    while (!isNaN(inp)) {
        array.push(inp);
        sum += inp;
        inp = parseFloat(prompt('Число:'));
    }
    return {
        array,
        sum,
        max: Math.max(...array),
    };
}
alert(JSON.stringify(sum()));
