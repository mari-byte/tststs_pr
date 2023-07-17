"use strict";
const doubb = (args) => {
    console.log(args * 2);
};
doubb.isUsed = true;
console.log(doubb.isUsed);
doubb(1000);
