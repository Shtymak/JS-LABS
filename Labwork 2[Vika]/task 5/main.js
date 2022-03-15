function find_longest(string) {
    const words = string.split(' ');
    return words.sort((a, b) => b.length - a.length).shift();
}

alert(find_longest('Web developer'));
