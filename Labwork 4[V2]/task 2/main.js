function sortByAge(array) {
    array.sort((a, b) => a.age - b.age);
}
const ivan = { name: 'Ivan', age: 20 };
const vasyl = { name: 'Vasyl', age: 21 };
const petro = { name: 'Petro', age: 19 };
let arr = [ivan, vasyl, petro];
sortByAge(arr);
alert(JSON.stringify(arr));
