"use strict";
console.log("Hello world new aaaabbbc go go daian abbbccc!!".replace(/ab+c/, "yonayona"));
console.log("Hello world new aaaabbbc go go daian abbbccc!!".replace(/ab+c/g, "yonayona"));
const daianresult = ("Hello aabbbbbbbbc world!! abc".match(/a(b+)c/));
if (daianresult !== null) {
    console.log(daianresult[0]);
    console.log(daianresult[1]);
    console.log(daianresult[2]);
    console.log(daianresult[3]);
}
