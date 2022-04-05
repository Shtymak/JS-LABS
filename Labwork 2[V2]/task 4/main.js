function range(begin, end) {
    if (begin >= end) {
        return [];
    }
    const elements = new Array();
    for (let i = begin; i <= end; i++) {
        elements.push(i);
    }
    return elements;
}

function sum(range) {
    return range.reduce(function (sum, element) {
        return sum + element;
    }, 0);
}

alert(sum(range(1, 4)));
