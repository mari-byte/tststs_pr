"use strict";
const nisizawa = (...args) => {
    let results = 0;
    for (const a of args) {
        results += a;
    }
    return results;
};
const atunums = [10, 20, 30, 40, 50];
console.log(nisizawa(...atunums));
