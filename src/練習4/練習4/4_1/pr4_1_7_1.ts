const summos = (bases: number, ...ar: number[]):number => {
  let rese = bases * 100;
  for(const num of ar) {
    rese += num;
  }  
  return rese;
}