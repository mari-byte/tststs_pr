const yusuke = {
    combi: "daian",
    kiryuu: {
        mt: 100,
        kaos: "jp",
        sen: {
            majitys: 45
        },
        jarara: ["supin","jiki","nag"]
    }
}

const {combi, kiryuu:{kaos}, kiryuu:{sen:{majitys}}, kiryuu:{jarara}} = yusuke;

console.log(combi); // daian
console.log(kaos); // jp
console.log(majitys); // 45
console.log(jarara); // [ 'supin', 'jiki', 'nag' ]