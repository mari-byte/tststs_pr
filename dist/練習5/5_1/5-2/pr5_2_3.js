"use strict";
class User5_2_3 {
    constructor() {
        this.daian = "manzaisan";
        this.kimiko = 0;
    }
}
const gomarari = new User5_2_3();
const tudin = { name: "yonayona" };
console.log(gomarari instanceof User5_2_3);
console.log({} instanceof User5_2_3);
console.log(tudin instanceof User5_2_3);
// ○○　instanceof　△△　○○は△△のインスタンスですか?
