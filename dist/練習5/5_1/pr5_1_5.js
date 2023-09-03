"use strict";
class User5_1_5 {
    static getAdminUser() {
        return new User5_1_5(User5_1_5.adminName, 30);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
}
User5_1_5.adminName = "tudatin";
console.log("1:", User5_1_5.getAdminUser());
console.log("2:", User5_1_5.getAdminUser().isAdult());
const goma = User5_1_5.getAdminUser();
console.log("3:", goma.name);
console.log("3:", goma.age);
console.log("3:", goma.isAdult);
console.log("3:", goma.isAdult());
const yukyan = new User5_1_5("yu-suketin", 15);
console.log("4", yukyan.age);
console.log("4", yukyan.isAdult());
console.log("4", yukyan.name);
yukyan.age = 47;
console.log("5", yukyan.age);
console.log("5", yukyan.isAdult());
