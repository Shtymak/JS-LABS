let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join(', ');
        },
    },
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в дії
alert(dictionary); // "apple,__proto__"
