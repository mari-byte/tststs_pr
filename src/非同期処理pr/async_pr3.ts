async function fail() {
    throw new Error("Oh my god");
}

const c = fail();

c.catch((error) => {
    console.log(error);
});