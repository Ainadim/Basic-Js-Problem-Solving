// 7. How would you extract the unique numbers in an array?


const numbers = [1,2,3,5,1,3,6,6,7,2,9,4,10,1,9];

const allDuplicate = numbers.filter (function (value,index,array) {
    return array.indexOf (value) !== index
});

console.log(allDuplicate);