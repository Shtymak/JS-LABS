const object = {
    constructor: function () {},
};

const object2 = new object.constructor();
console.log(`object: ${JSON.stringify(object2)}`);
object.constructor = () => {
    return 0;
};
const object3 = new object.constructor();
console.log(`object: ${JSON.stringify(object3)}`);
