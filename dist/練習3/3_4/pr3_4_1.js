"use strict";
const objFam = {
    mother: 99,
    father: 80,
    child: "70"
};
console.log(objFam);
for (const aaa of Object.values(objFam)) {
    console.log(aaa);
}
