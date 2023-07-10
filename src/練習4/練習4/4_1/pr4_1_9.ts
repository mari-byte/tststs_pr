const handan = (str: string, memon?: boolean): string => {
  if (memon) {
    console.log("memonの型の確認１", typeof memon, "::", memon);
    return str.toUpperCase();
  } else if (!memon) {
    console.log("memonの型の確２", typeof memon, "::", memon);
    return str.toLowerCase();
  } else {
    return "memonが定義されていません!!";
  }
};

console.log(handan("daIan", true));

console.log(handan("kuriiMuTYa", false));

console.log(handan("maeAKANnoko"));
