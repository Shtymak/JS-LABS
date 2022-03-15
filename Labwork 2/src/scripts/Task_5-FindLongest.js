const findLongest = (line) =>
    line.split(' ').reduce(function (a, b) {
        return a.length > b.length ? a : b;
    });

alert(findLongest('Web Developer'));
alert(findLongest('Україна - наше все!'));
