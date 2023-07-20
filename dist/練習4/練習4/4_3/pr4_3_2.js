"use strict";
const showunko = (objs) => {
    console.log(objs.name);
};
const yuskekun = () => {
    console.log("これ食べてええやつ？");
};
const kh = showunko;
const komaba = yuskekun;
kh({ name: "yasuu", agess: 1000 });
komaba({ name: "mitaka", agess: 200 });
