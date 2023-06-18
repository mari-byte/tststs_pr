type him = {
    who?: string
};

const H1: him = {};
const H2: him = {who: "himura"};
const H3 = {sita: null};

const {who: whos = "banana"} = H1;

const {who = "yuki"} = H2;

console.log(whos);
console.log(who);

const {sita = 124} = H3;

console.log(sita);