type RyoutuHuman = {
    height: number;
    weight: number;
};

const bmikankiti  = function(rytu: RyoutuHuman): number {
    return rytu.weight / rytu.height ** 2;
}

const onsenn: RyoutuHuman = {
    height: 1.80,
    weight: 65
}

const syatihokoman: RyoutuHuman = {
    height: 1.75,
    weight: 98
}


console.log(bmikankiti(onsenn));

console.log(bmikankiti(syatihokoman));