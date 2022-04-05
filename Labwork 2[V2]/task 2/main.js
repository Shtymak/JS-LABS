function CheckAge(age) {
    return age > 18 ? true : confirm('А батьки дозволили?');
}

function checkAge(age) {
    return age > 18 || confirm('А батьки дозволили?');
}

console.log(checkAge(20));
