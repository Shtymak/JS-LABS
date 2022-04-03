function Filtered(array, a, b) {
    array.forEach((element, index) => {
        if (element >= a && element <= b) {
            array.splice(index, 1);
        }
    });
}
let numbers = [4, 8, 6, 3, 9, 1, 5];
Filtered(numbers, 1, 4);
alert(numbers); //[8,6,9,5]
