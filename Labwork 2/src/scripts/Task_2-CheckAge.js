const checkAge = (age) => (age > 18 ? true : confirm('А батьки дозволили?'));
const checkAge2 = (age) => age > 18 || confirm('А батьки дозволили?');
