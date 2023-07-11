type anos = {
  aname: string;
  ages: number;
};

const getNName = (u: anos): string => {
  console.log("u is", u);
  return u.aname;
};

const anouse: anos[] = [
  { aname: "uhyo", ages: 25 },
  { aname: "upochaco", ages: 99 },
];

const nameano = anouse.map(getNName);

console.log(nameano);
