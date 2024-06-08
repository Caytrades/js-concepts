const apples = 2;
const applesPrice = 3.5;

let totalPrice = apples * applesPrice;
console.log("Total price:", totalPrice);

const oranges = 3;
const orangesPrice = 4;

// The next line is a short form of totalPrice = totalPrice + oranges * orangesPrice;
totalPrice += oranges * orangesPrice;
console.log("Total price:", totalPrice);