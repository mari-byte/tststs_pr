import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('kkk')

rl.question('数字を入力して下さい：',(line) => {
    console.log(line);
    const num = Number(line);

    console.log("計算結果は："+num + 100);

    rl.close();

})
