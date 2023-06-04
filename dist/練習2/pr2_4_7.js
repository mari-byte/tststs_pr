import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('数字を入力して下さい', (num) => {
    const dispname = Number(num);
    const message = 0 <= dispname && dispname <= 100
        ? `入力された文字は${dispname}です`
        : `想定外です`;
    console.log(message);
    rl.close();
});
