function unique(array) {
    return [...new Set(array)];
}

let names = ['Ivan', 'Petro', 'Vasyl', 'Ivan', 'Vasyl', 'Dmytro'];
alert(unique(names));
