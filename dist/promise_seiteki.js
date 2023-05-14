"use strict";
//const p = Promise.resolve("100");
const p = new Promise((resolve) => {
    resolve(100);
});
p.then((result) => {
    console.log(`resultは${result}です`);
});
