"use strict";
const dabee = {
    nama: 144,
    kiryuu: {
        meta: 100,
        kao: "ainyan",
        hujii: {
            majity: 45
        },
        mousou: ["supin", "imagaiijiki", "nagainen"]
    }
};
const { nama, kiryuu: { kao }, kiryuu: { hujii: { majity } }, kiryuu: { mousou } } = dabee;
console.log(nama);
console.log(kao);
console.log(majity);
console.log(mousou);
