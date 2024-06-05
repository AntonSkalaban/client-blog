export const numToStringWithK = (num: number) => {
  let str = num.toString();

  const len = str.length;

  if (len > 3) {
    let kCount = Math.floor(len / 3);

    if (kCount * 3 === len) kCount -= 1;
    const kStr = "K".repeat(kCount);

    str = `${str.slice(0, len - kCount * 3)}+${kStr}`;
  }

  return str;
};
