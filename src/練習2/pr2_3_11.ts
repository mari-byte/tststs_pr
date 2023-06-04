import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数字を入力して下さい", (line) => {
  const num = Number(line);

  console.log(100 + num);
  rl.close();
});
