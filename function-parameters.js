const otherName = "-Come";

function myFirstFunction(name) {
    return name + otherName;
}

let call = myFirstFunction("Wel");

console.log(call);

/*
function processData(inputString) {
    // This line of code prints the first line of output
    let x = "Hello, World.";
    // Write the second line of output that prints the contents of 'inputString' here.
   return x + "\n" + inputString;
}

let n = processData(`Welcome to 30 Days of Code!`);
console.log(n);
*/


function processData(inputString) {
    console.log("Hello, World.");
     console.log(inputString);
}

processData(`I'm Cay`);


function addNumbers(a, b) {
    console.log( a + b);
}

addNumbers(12, 200);