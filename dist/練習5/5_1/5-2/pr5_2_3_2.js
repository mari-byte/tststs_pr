"use strict";
class User5_2_3_2 {
    constructor(ogi, age) {
        this.ogi = ogi;
        this.age = age;
    }
}
function getyhagi(customer) {
    if (customer instanceof User5_2_3_2) {
        if (customer.ogi === "ogi") {
            return 0;
        }
    }
    return customer.age < 18 ? 1000 : 100;
}
const customer1 = { age: 10 };
const customer2 = { age: 50 };
const oyah = new User5_2_3_2("ogi", 25);
console.log(getyhagi(customer1));
console.log(getyhagi(customer2));
console.log(getyhagi(oyah));
