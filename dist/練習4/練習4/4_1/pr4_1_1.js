"use strict";
function arrcon(minu, manu) {
    const res = [];
    for (let i = minu; i <= manu; i++) {
        res.push(i);
    }
    return res;
}
console.log(arrcon(1, 7));
