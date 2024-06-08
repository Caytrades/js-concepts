const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i++) {
  rows.push(character);
  if(i == 6) {
    break;
  }
  else{
    console.log(rows);
  }
}