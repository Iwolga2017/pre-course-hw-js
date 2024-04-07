const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

let evenArr = numbers.map(arr => arr.filter(item => item % 2 === 0)).filter(arr => arr.length > 0);

console.log(evenArr);

