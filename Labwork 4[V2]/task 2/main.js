function sortByAge(array) {
    return array.sort((a, b) => {
        return a.age >= b.age;
    });
}
const ivan = { name: 'Ivan', age: 20 };
const vasyl = { name: 'Vasyl', age: 21 };
const petro = { name: 'Petro', age: 19 };
let arr = [ivan, vasyl, petro];
arr = SortByAge(arr);
alert(JSON.sstringify(arr));
