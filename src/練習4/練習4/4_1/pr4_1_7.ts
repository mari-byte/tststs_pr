const summs = (...args: number[]): number => {
  let result = 0;
  for (const nums of args) {
    result += nums;
  }
  return result;
};

console.log(summs(10, 30, 200));
