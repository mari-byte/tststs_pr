"use strict";
for (let i = 0; i <= 100; i++) {
    console.log("現在の数字:", i);
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    }
    else {
        console.log(i);
    }
}
