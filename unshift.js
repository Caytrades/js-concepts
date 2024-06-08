/*
The .unshift() method of an array allows you to add a value to the
beginning of the array, unlike .push() which adds the value at the end 
of the array. 
*/

/*
const numbers = [1, 2, 3];
const unshifted = numbers.unshift(5);
console.log(numbers);
*/

const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);
