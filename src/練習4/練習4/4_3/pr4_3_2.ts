type hasNaa = {
    name: string;
}

type HasNameUnkoN = {
    name: string;
    agess: number;
}

const showunko = (objs: hasNaa) => {
    console.log(objs.name);
}

const yuskekun = () => {
    console.log("これ食べてええやつ？")
}
const kh:(objs:HasNameUnkoN) => void = showunko;
const komaba:(objs:HasNameUnkoN) => void = yuskekun;

kh({name: "yasuu", agess: 1000})

komaba({name: "mitaka", agess: 200})