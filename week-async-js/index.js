let ctr = 0
const callback = () => {
    ctr += 1
    console.log(ctr)
}

setInterval(callback, 1000)

const fs = require("fs");

const content = fs.readFileSync("a.txt", "utf-8")
console.log(content)

const content2 = fs.readFileSync("b.txt", "utf-8")
console.log(content2)

const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const doArithmetic = (a, b, fun) => {
  return fun(a, b);
};

console.log(doArithmetic(8, 4, sub));
