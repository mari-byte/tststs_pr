import { readFile } from "fs/promises";

const sleepReject = (dualing: number) => {
  return new Promise<never>((resolve,reject) => {
    setTimeout(reject,dualing);
  })
};

const p = readFile("baz.txt","utf8")
.then((result) => sleepReject(1000))
.then((result) => {
  console.log(result);
})
.catch((error)=>{
  console.log("エラーが発生しました",error);
});
