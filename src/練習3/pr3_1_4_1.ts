import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
})

const message = {
    "good": "0以上の数字が入力されました",
    "bad": "-が入力されました",
}
rl.question("数字を入力してください",(line) => {
    const num = Number(line);
    console.log(message[0 <= num ? "good" : "bad"]);
    rl.close();
})