const without = (obj, ...params) => params.map(x => delete obj[x])

const data = { a: 1, b: 2, c: 3 };
without(data, 'b', 'c'); // { a: 1 }
alert(JSON.stringify(data))