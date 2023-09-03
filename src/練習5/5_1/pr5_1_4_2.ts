class Userspr5_1_4_2 {
    name: string;
    readonly age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }

    // setAge(newAge: number) {
    //     this.age = newAge
    // }
}

const uhyou = new Userspr5_1_4_2("hanzawa",30);

console.log(uhyou.age)
console.log(uhyou.name)