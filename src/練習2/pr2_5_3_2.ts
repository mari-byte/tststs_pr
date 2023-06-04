import { createInterface } from "readline";

let sum = 0;
let j = 0;
while (j < 10) {
  sum += j;
  j++;
  console.log(sum);
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("好きな芸人を入力してください", (gname) => {
  switch (gname) {
    case "daian":
      console.log("僕も最近好きなんですよね");
      break;
    case "kuriimu":
      console.log("やっぱりお笑いの神様よなあ");
      break;

    default:
      console.log("ほー知らないですね\n確認してみますねえ");
      break;
  }
  rl.close();
});
