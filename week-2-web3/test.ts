const test = async (): Promise<number> => {
  return 10;
};

const value = await test();
console.log(value);
