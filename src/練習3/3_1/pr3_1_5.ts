const obja = {
    "age": 27,
    "name": "yu-suke",
    "job": true,
};

const objb = {
    "radio": "tbs",
    ...obja,
    "age": 30,
};

console.log(objb);

