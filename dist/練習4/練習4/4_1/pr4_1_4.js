"use strict";
const brega = (jimsei) => {
    return jimsei.weight2 / jimsei.heitaku1 ** 2;
};
const jimsei = {
    heitaku1: 1.8,
    weight2: 103,
};
console.log(brega(jimsei));
const begtra = ({ heitaku1, weight2 }) => {
    return weight2 / heitaku1 ** 2;
};
const kkdire = {
    heitaku1: 1.5,
    weight2: 43,
};
console.log("::");
console.log(begtra(kkdire));
