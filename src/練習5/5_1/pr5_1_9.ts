class User5_1_9 {

    name:string;
    #age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.#age = age
    }

    isAdult():boolean {
        return this.#age >= 20
    }
}

const henyou = new User5_1_9("tanabesan",30)

console.log(henyou.isAdult())
// console.log(henyou.#age);
console.log(henyou.name);
