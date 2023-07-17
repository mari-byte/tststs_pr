type Myfunc = {
  isUsed?: boolean;
  (args: number): void;
};

const doubb: Myfunc = (args: number) => {
  console.log(args * 2);
};

doubb.isUsed = true;
console.log(doubb.isUsed);
doubb(1000);