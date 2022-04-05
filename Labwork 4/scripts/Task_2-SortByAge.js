const SortByAge = (array) => array.sort((a, b) => a.age >= b.age);

const ivan = { name: 'Ivan', age: 20 };
const vasyl = { name: 'Vasyl', age: -21 };
const petro = { name: 'Petro', age: 19 };
const arr = [ivan, vasyl, petro];
SortByAge(arr);

alert(JSON.stringify(arr)); //[petro, ivan, vasyl]
