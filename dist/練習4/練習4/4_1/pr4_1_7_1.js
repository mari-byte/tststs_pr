"use strict";
const summos = (bases, ...ar) => {
    let rese = bases * 100;
    for (const num of ar) {
        rese += num;
    }
    return rese;
};
