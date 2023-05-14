import { readFile } from "fs/promises";
readFile("bar.txt", "utf8")
    .finally(() => {
    console.log("loading Now");
})
    .catch(() => "")
    .then((result) => {
    console.log(result);
});
