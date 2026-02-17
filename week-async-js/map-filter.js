const numbers = [2, 3, 4, 5, 6, 7, 8];
const bignum = [25, 625, 144, 49];

const double = numbers.map((x) => x*x)
const sqrt = bignum.map((num) => Math.sqrt(num))

// console.log(double)
// console.log(sqrt)

const arr = {
  name: "ayush",
  age: 21,
};

const car = [
  { model: "toyoto", year: 2018, price: "$500" },
  { model: "tesla", year: 2017, price: "$2100" },
];


const names = ["ayush", "nobara", "bakamitai"]

const trim = names.filter((w) => w.length > 5)
// console.log(trim)