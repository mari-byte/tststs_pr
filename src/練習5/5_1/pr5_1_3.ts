class Users5_1_3 {
    name: string = "";
    age: number = 0;



    isAd(): boolean {
        return this.age >= 20;
    }
    
    
    setAges(newAge: number) {
        this.age = newAge
    }
}

const uhyo5_1_3 = new Users5_1_3();

console.log("調査1",uhyo5_1_3.age);
console.log("調査2",uhyo5_1_3.name);
console.log("調査3",uhyo5_1_3.isAd());
console.log("調査4",uhyo5_1_3.setAges(90));
console.log("調査5",uhyo5_1_3.age);
console.log("調査6",uhyo5_1_3.isAd());

