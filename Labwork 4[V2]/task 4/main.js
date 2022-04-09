function filtered(array, start, end) {
    return array.filter((element) => element < start || element > end);
}
let numbers = [4, 8, 6, 3, 9, 1, 5];
alert(filtered(numbers, 1, 4)); //[8,6,9,5]
