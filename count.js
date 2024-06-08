const button = document.getElementById('clickBtn');
const counter = document.getElementById('counter');
let count = 0;

function countIncrease(){
    count++;
    counter.textContent = count;
    
}

addEventListener('click', countIncrease);