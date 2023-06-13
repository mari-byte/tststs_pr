type userdaian<T> = {
    name: string;
    child: T;
};

type Family<Parent, Child> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

const objFam: Family<number, string> = {
    mother: 99,
    father: 80,
    child: "70"
};

console.log(objFam);

for(const aaa of Object.values(objFam)) {
    console.log(aaa);
}
