type guest = {
    "happy_s": string;
    "happy_h": string;
    "ok": number[];
    "ino"?: boolean;
};

const sitarakun: guest = {
    "happy_s": "nao",
    "happy_h": "gen",
    "ok": [423, 50],
    "ino": true,
}

const himurakun: guest = {
    "happy_s": "nogi",
    "happy_h": "gegen",
    "ok": [99,55,3],
}

console.log(sitarakun.ino);
console.log(himurakun.ino);