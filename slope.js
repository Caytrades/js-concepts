//First Version
/*
const character = "#";
const count = 10;
const rows = [];

for (let i = 0; i < count; i++) {
  rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
 result = result + "\n" + row;
}

console.log(result);
*/

//Second Version With A Function
const character = "#";
const count = 10;
const rows = [];

function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
