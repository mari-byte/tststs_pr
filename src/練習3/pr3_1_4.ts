const geinin = {
    gname: "tudatin",
    age: 47,
}

geinin.gname = "new_tudatin";
geinin["age"] = 46;

console.log(geinin.gname);
console.log(geinin.age);

console.log(geinin["gname"]);
console.log(geinin["age"]);