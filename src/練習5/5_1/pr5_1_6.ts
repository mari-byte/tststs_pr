class User5_1_6 {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdlut(): boolean {
    return this.age >= 20;
  }

  public setAge(ages: number): number {
    this.age = ages;
    return this.age;
  }
}

const bann = new User5_1_6("itoukazue", 20)

console.log("1",bann)
console.log("2",bann.isAdlut())
// console.log("3",bann.age)
console.log("4",bann.name)
console.log("5",bann.setAge(11))
console.log("6",bann.isAdlut())