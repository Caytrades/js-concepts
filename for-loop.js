/*When you have to perform a task repeatedly until a condition is met,
you will use a loop.*/

//Increament
/*
    for(let i = 0; i <= 2; i++){
        console.log(i);
        console.log("####");
    }
*/

/*
    for(let i = 1; i <= 10; i++ ) {
    console.log(i);
    }
*/

/*
for(let i = 2; i <= 10; i+=2) {
    console.log(i);
}
*/

//Decrement

/*
for(let i = 10; i > 0; i--) {
console.log(i);
}

console.log("Happy New Year");
*/

/*
for(let i = 10; i > 0; i-=2) {
    console.log(i);
}
*/

//Continue Loop: Skips an iterations completely

/*
for(let i = 10; i > 0; i--) {
    if(i == 4){
        continue;
    }
    else{
        console.log(i);
    }
}
*/

//Break Loop


for(let i = 0; i < 10; i++) {
    if( i == 4){
        break;
    }
    else{
        console.log(i);
    }
}
