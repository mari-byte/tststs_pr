const mapblack: Map<string, number> = new Map();

mapblack.set("foo", 12345);
mapblack.set("kee", 5);
mapblack.set("ii", 12);
mapblack.set("i", 99);
mapblack.set("all", 102);
console.log(mapblack.get("foo"));

console.log(mapblack.get("koo"));

console.log(mapblack.delete("i"));

console.log(mapblack);