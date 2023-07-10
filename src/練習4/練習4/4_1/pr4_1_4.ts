type humant = {
  heitaku1: number;
  weight2: number;
};

const brega = (jimsei: humant): number => {
  return jimsei.weight2 / jimsei.heitaku1 ** 2;
};

const jimsei: humant = {
  heitaku1: 1.8,
  weight2: 103,
};

console.log(brega(jimsei));

const begtra = ({ heitaku1, weight2 }: humant): number => {
  return weight2 / heitaku1 ** 2;
};

const kkdire: humant = {
  heitaku1: 1.5,
  weight2: 43,
};
console.log("::");

console.log(begtra(kkdire));
