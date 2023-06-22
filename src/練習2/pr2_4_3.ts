import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("名前を入力してください", (names) => {
  console.log("こんにちは", names + "さん");
  rl.close();
});
