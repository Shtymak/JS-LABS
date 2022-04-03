const Unique = (arr) =>
    arr.filter((value, index, array) => array.indexOf(value) === index);
const names = ['Ivan', 'Petro', 'Vasyl', 'Ivan', 'Vasyl', 'Dmytro'];
alert(Unique(names)); // Ivan,Petro,Vasyl,Dmytro
