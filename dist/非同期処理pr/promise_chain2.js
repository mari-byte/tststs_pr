import { readFile } from "fs/promises";
const p = readFile("baz1.txt", "utf8");
const p2 = p.catch(() => "");
p2.then((result) => {
    console.log(result);
});
