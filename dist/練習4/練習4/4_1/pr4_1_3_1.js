"use strict";
const kannkiti = function ({ height, weight }) {
    return weight / height ** 2;
};
const pato = {
    height: 1.84,
    weight: 72,
    robo: "honoo"
};
console.log(pato.robo, "::", kannkiti(pato));
