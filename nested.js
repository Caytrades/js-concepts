//Multi-dimensional or nested array

var normalArray = ["Hello", "World"];
var getString = normalArray[0];
console.log(getString);



var myName = "Cay";
var nestedArray = [["Hello World "], [`I'm ` + myName]];
var getEntireString = nestedArray[0] + nestedArray[1];
console.log(getEntireString)


var moreComplexNestedArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = moreComplexNestedArray[0][1];
var mySecondData = moreComplexNestedArray[2][1];
var myThiredData = moreComplexNestedArray[3][0];
var allCombined = myData +" " + mySecondData + " " + myThiredData;

console.log(allCombined);