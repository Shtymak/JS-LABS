function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function formatName(line) {
    let words = line.split('-');
    words[1] = capitalize(words[1]);
    return words.join('');
}
alert(formatName('bg-color')); //bgColor
alert(formatName('user-names')); //userNames
alert(formatName('font-size')); //fontSize
