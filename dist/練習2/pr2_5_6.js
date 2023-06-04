"use strict";
for (let k = 1; k <= 100; k++) {
    if (k % 2 === 0) {
        continue; //　continueはその処理を中断して次の処理に移行する流れとなる 
        // break;
    }
    console.log(k);
}
