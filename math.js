const displayResult = document.getElementById('result');
const button = document.getElementById('clickBtn');

let x = -4;
let y = 3;
let z = 1;
const min = 50 ;
const max = 100;
let randomNum;



button.onclick = function(){
    //z = Math.round(x); Rounds to the nearest
    //z = Math.floor(x); Rounds to the bottom
    //z = Math.ceil(x); Rounds to the top
    //z = Math.trunc(x); Eliminates all decimals
    //z = Math.pow(x , y); Raises the power of the number
    //z = Math.pow(y , x);
    //z = Math.sqrt(x); Square root
    //z = Math.log(x); Logarithm
    //z = Math.sin(x); Trigonometry
    //z = Math.cos(x);
    //z = Math.tan(x);
    //z = Math.abs(x); Finds the absolute function of a number
    //z = Math.sign(x); Finds the assign of a number
    //max = Math.max(x , y , z); Finds the maximum number
    //min = Math.min(x, y, z); Finds the minmum number
    //randomNum = Math.floor(Math.random() * 6); Selects a random number(2-5)
    randomNum = Math.floor(Math.random() * (max - min)) + min;


    displayResult.textContent = randomNum;

}
