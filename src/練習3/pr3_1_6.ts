const fooa = {
  fname: "ginsan",
  age: 25,
};

const bara = fooa;

console.log(bara.fname);

bara.fname = "sinpati";
console.log(fooa.fname);

const baza = { job: "dj" };

const kagura = baza;

console.log(baza === kagura);

const katura = { job: "dj" };

console.log(katura === baza);
