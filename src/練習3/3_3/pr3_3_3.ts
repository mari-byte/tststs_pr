type Users = {
    "name":string;
    "age":number;
};

const users = {
    "name":"okita",
    "age":20,
    "koituha": true,
}

const t: Users = users;

console.log(t);
console.log(t.name);
console.log(t.age);