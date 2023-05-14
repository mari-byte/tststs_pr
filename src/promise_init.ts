// const p = new Promise<number>((resolve) => {
//     setTimeout(() =>{
//         console.log("成功しました");
//         resolve(100);
//     }, 3000);
// });

// p.then((num)=> {
//     console.log(`結果は${num}`);
// })

const sleepReject = (duration: number) => {
    return new Promise<never>((resolve,reject)=> {
        setTimeout(reject,duration);
    })
};

sleepReject(3000).catch(() => {
    console.log("失敗しました!!!");
});