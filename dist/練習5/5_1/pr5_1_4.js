"use strict";
class User5_1_4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
    isName() {
        return this.name;
    }
}
const douseinohanasi = new User5_1_4("himurasann", 30);
console.log("douseinohanasiについての中身", douseinohanasi);
console.log("nameについての中身", douseinohanasi.name);
console.log("ageについての中身", douseinohanasi.age);
console.log("douseinohanasi.isAdult()", douseinohanasi.isAdult());
console.log("douseinohanasi.isName()", douseinohanasi.isName);
console.log("douseinohanasi.isName()", douseinohanasi.isName());
