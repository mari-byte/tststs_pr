import { readFile } from "fs/promises";
const p = readFile("foo1.txt", "utf8");
p.then((result) => {
    console.log("成功しました", result);
});
p.catch((error) => {
    console.log("失敗しました", error);
});
p.finally(() => {
    console.log("終了しました。");
});
