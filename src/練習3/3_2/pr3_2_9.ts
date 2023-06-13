const obiij = {
    "fooo": 1,
    "baaan": false,
    "baaz": "konnitiha",
};

type TS = typeof obiij;

const obj1: TS = {
    "fooo": 22,
    "baaan": true,
    "baaz": "naruheso",
};

console.log(obiij);
console.log(obj1);
