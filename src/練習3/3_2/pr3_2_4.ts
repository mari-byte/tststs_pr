interface baMan {
  "sakka": number;
  "ad":string[];
}

const djsp: baMan = {
  "sakka": 1,
  "ad": ["dorobo", "janipta"],
}

console.log(djsp);
console.log(djsp.sakka);
console.log(djsp["ad"]);
