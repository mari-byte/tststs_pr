function nabee(minnum: number, maxnum: number): number[] {
    const results = [];
    for(let i = minnum; i<= maxnum; i++) {
        results.push(i);
    }
    return results;
}

console.log(nabee(1,7));


function nagurareya(omax: number, omini: number): number[] {
    const nannnimo = [];

    for(let i = omax; i >= omini; i--) {
        nannnimo.push(i);
    }
    return nannnimo
}

console.log(nagurareya(10, 5));
console.log(nagurareya(1, 3));