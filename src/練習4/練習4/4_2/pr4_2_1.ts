  type F = (repeatNunm: number) => string;

  const xpeat: F = (num: number): string => "X".repeat(num);

  console.log(xpeat(10));