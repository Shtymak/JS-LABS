const obj = {
    constructor: function () {
        console.log('Creating the same object...');
        return this;
    },
};

const errorObj = {
    constructor: function () {
        return NaN;
    },
};

let obj2 = new obj.constructor();
console.log(obj2);
