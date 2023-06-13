const array53: Array<{
  name: string;
}> = [{ name: "yamada" }, { name: "tanaka" }, { name: "suzuki" }];

console.log(array53);

console.log(array53[2]);
console.log(array53[5]);

const jama:readonly number[] = [1,10,100];

// jama[0] = 30;

// jama.push(10001); readonlyではpush()が使用できないことの確認

