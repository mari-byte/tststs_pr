type fams<Parents,Chil> = {
    fathers: Parents;
    mothers: Parents;
    chils: Chil;
}



const gamess: fams<String, T> = {
    fathers: "titi",
    mothers: "haha",
    chils: 55
}

console.log(gamess);

console.log(gamess.fathers);
console.log(gamess.mothers);