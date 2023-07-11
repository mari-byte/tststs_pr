"use strict";
const getNName = (u) => {
    console.log("u is", u);
    return u.aname;
};
const anouse = [
    { aname: "uhyo", ages: 25 },
    { aname: "upochaco", ages: 99 },
];
const nameano = anouse.map(getNName);
console.log(nameano);
