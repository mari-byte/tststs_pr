type HasAge = {
  age: number;
};

class User5_2_3_2 {
  ogi: string;
  age: number;

  constructor(ogi: string, age: number) {
    this.ogi = ogi;
    this.age = age;
  }
}

function getyhagi(customer: HasAge) {
  if (customer instanceof User5_2_3_2) {
    if (customer.ogi === "ogi") {
      return 0;
    }
  }
  return customer.age < 18 ? 1000 : 100;
}

const customer1: HasAge = { age: 10 };
const customer2: HasAge = { age: 50 };

const oyah = new User5_2_3_2("ogi", 25);

console.log(getyhagi(customer1))
console.log(getyhagi(customer2))
console.log(getyhagi(oyah))