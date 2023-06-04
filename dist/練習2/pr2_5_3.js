import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("数字を入力してください", (line) => {
    const num = Number(line);
    const nummessage = 0 <= num && num <= 50
        ? console.log(`${num} :入力した数字は、範囲内の数字です。`)
        : console.log("想定外の数字です");
});
rl.question("動物を入力して下さい", (animal) => {
    switch (animal) {
        case "dog":
            console.log("私も犬派ですよ");
            break;
        case "cat":
            console.log("猫派なんですね人気だよねー");
            break;
        case "fish":
            console.log("魚もいいですよねえ");
            break;
        default:
            console.log("意外な動物が好きなんですねえ");
            break;
    }
    rl.close();
});
