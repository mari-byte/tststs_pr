function repe3(o:number) {
    if(o >= 10) {
        console.log(`${o}回なんて無理ですよ。早期リターンしますね`);
        return
    }
    for(let p = 0; p < o; p++) {
        console.log("こんにちは!");
    }
}

repe3(3);

repe3(10);
