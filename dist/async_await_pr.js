"use strict";
const sleep = (dulation) => {
    return new Promise((resolve) => {
        setTimeout(resolve, dulation);
    });
};
async function get5() {
    console.log("get5が呼び出されました");
    await sleep(3000);
    console.log("awaitの次に進みました");
    return 3;
}
console.log("get5を呼び出します");
const d = get5();
d.then((num) => {
    console.log(`num is ${num}`);
});
console.log("get5を呼び出しました");
