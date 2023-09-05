"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User5_1_9_age;
class User5_1_9 {
    constructor(name, age) {
        _User5_1_9_age.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _User5_1_9_age, age, "f");
    }
    isAdult() {
        return __classPrivateFieldGet(this, _User5_1_9_age, "f") >= 20;
    }
}
_User5_1_9_age = new WeakMap();
const henyou = new User5_1_9("tanabesan", 30);
console.log(henyou.isAdult());
// console.log(henyou.#age);
console.log(henyou.name);
