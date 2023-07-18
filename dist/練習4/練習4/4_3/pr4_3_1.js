"use strict";
const fromAge = (agess) => ({
    namess: "ano",
    agess,
});
const f = fromAge;
// const g: (agess:number) => HasNameUnkoB = fromAge;
const h = fromAge;
const objs = f(10);
console.log(objs);
console.log(f);
