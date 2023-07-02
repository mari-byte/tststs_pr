"use strict";
const bmikankiti = function (rytu) {
    return rytu.weight / rytu.height ** 2;
};
const onsenn = {
    height: 1.80,
    weight: 65
};
const syatihokoman = {
    height: 1.75,
    weight: 98
};
console.log(bmikankiti(onsenn));
console.log(bmikankiti(syatihokoman));
