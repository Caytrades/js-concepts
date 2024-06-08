let button = document.getElementById('clickButton');
let counter = document.getElementById('counter');
let count = 0;

function increamentNumber() {
    count++;
    counter.textContent = count;
}

button.addEventListener('click', increamentNumber);

