const odoryname: Array<{
  name: string;
}> = [{ name: "seidou" }, { name: "satomitu" }];

console.log("追加前",odoryname);

odoryname.push({name:"d-tyan"});

console.log(odoryname);

const arr = [0,1,2,3];

console.log(arr.includes(0));

console.log(arr.includes(300));

arr.push(199);

console.log(arr.length);