import { type } from "os";

type unaryfunk = (zo:number) => number;
type unaryfunkbuy = (zos:number, adso:number) => number;

const doub:unaryfunk = zo => zo * 5;

const ads: unaryfunkbuy = (zos,adso) => (zos + adso);

const kku:unaryfunkbuy = doub;

console.log(kku(40,22));

console.log(ads(90,30));