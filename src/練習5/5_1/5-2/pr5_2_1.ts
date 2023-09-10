class User5_2_1 {
    name: string = "";
    age: number = 0;

    isAdult(): boolean {
        return this.age >= 20;
    }
}

const matumoto: User5_2_1 = new User5_2_1();


// constructerがないとインスタンス化の際に初期化が出来ない
// const hamada = new User5_2_1(name:"tudatin",age: 30)

const hamad: User5_2_1 = {
    name: "akanyo",
    age: 90,
    isAdult: () => false
}


console.log("1", matumoto)
console.log("1", matumoto.isAdult())
console.log("2", hamad)
console.log("2", hamad.isAdult())
console.log("2", hamad.name)