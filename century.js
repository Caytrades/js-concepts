function solution(year) {
    // Divide the year by 100 and round up to get the century
    return Math.ceil(year / 100);
}

// Test cases
console.log("solution(1905) =", solution(1905)); // Output: 20
console.log("solution(1700) =", solution(1700)); // Output: 17
console.log("solution(1300) =", solution(1300)); // Output: 17
console.log("solution(1500) =", solution(1500)); // Output: 17
