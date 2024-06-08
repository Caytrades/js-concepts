const increaseBtn = document.getElementById('clickButton');
const resetBtn = document.getElementById('resetButton');
const counter = document.getElementById('counter');

// Initialize counter value
let count = 0;

// Function to increment counter and update display
increaseBtn.onclick = function(){
    count++;
    counter.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    counter.textContent = count;
}