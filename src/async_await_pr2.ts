const sleep2 = (dulation: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve,dulation);
    });
};

async function get6() {
    //console.log("get5が呼び出されました")
    await sleep2(3000);
    //console.log("awaitの次に進みました")
    return 3;
}

//console.log("get5を呼び出します")

async function main() {
    const num1 = await get6();
    const num2 = await get6();
    const num3 = await get6();
    return num1 + num2 + num3;    
}

main().then((result) => {
    console.log(`result is ${result}`);
});