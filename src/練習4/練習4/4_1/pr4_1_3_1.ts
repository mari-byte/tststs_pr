type robotype = {
    height: number;
    weight: number;
    robo: string;
}

const kannkiti = function({height, weight}: robotype): number {
    return weight / height ** 2;
}

const pato: robotype = {
    height: 1.84,
    weight: 72,
    robo: "honoo"
}

console.log(pato.robo,"::",kannkiti(pato));