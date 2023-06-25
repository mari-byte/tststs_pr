console.log(ar2(15,20))

function ar2(fir: number, sec: number): number[] {
    let rr = [];

    for(let k = fir; k <= sec; k++) {
        rr.push(k);
    }

    return rr;
}