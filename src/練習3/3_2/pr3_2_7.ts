type TTT = {
    readonly odory: string;
    "kumi": number;
};

const nuts: TTT = {
    odory: "wakakasu",
    "kumi": 9393,
};

console.log(nuts);
nuts.kumi = 44;
console.log(nuts.kumi);
console.log(nuts["odory"]);
console.log(nuts.odory);