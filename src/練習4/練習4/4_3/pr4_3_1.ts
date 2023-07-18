type HasName = {
    namess: string;
}

type HasNameB = {
    namess: string;
}

type HasNameUnko = {
    namess: string;
    agess: number;
}

type HasNameUnkoB = {
    namess: string;
    agess: number;
    kkk: boolean,
}

const fromAge = (agess: number): HasNameUnko => ({
    namess: "ano",
    agess,
});

const f: (agess:number) => HasName = fromAge;

// const g: (agess:number) => HasNameUnkoB = fromAge;
const h: (agess:number) => HasNameB = fromAge;
const objs: HasName = f(10);

console.log(objs);
console.log(f);