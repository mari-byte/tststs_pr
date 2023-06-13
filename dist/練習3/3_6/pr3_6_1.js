"use strict";
const notyan = {
    foos: "neko",
    bar: "inu",
};
const { foos } = notyan;
console.log(foos);
const ainyan = {
    masa: "man",
    min: false,
    kke: 123,
};
const { masa, min: mimimi, "kke": hujitani } = ainyan;
console.log(masa);
console.log(mimimi);
console.log(hujitani);
