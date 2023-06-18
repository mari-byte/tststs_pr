const r = /ab+c/;

console.log(r.test("aaabbc"));

console.log(r.test("cba"));
console.log(r.test("bbbac"));
console.log(r.test("aaaaacbbabc"));
console.log(r.test("aaaabbbaacbb"));

const ar1: [string, number, boolean] = ["mezasi", 10, false];
ar1.push("追加しました。");

console.log(ar1);

console.log(typeof(ar1[0]));
console.log(typeof(ar1));