const findSum = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const result = findSum(10);
console.log(result);
