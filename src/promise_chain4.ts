import { readFile } from "fs/promises";

const repeat10 = (str: string) =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve(str.repeat(10)), 3000);
  });

  readFile("foo.txt","utf8")
  .then((result)=>repeat10(result))
  .then((result)=>{
    console.log(result);
  });
