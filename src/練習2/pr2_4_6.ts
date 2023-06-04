import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('名前を入力して下さい',(name) => {
    const despname = name || "名無しです。";

    console.log(`入力した名前は${despname}だよ`);
    rl.close();
})