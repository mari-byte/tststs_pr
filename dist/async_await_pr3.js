"use strict";
async function main2() {
    const { readFile, writeFile } = await import("fs/promises");
    try {
        const fooContent = await readFile("foo.txt", "utf8");
        await writeFile("bar2.txt", fooContent + fooContent);
        console.log("書き込み終了しました");
    }
    catch (error) {
        console.log("失敗しました");
    }
}
main2().then(() => {
    console.log(`main()が成功しました`);
});
