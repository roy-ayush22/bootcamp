let count = 0;

const Counter = () => {
  count += 1;
  console.log(count);
//   setTimeout(Counter, 1000)
};

setInterval(Counter, 1000);

// setTimeout(Counter, 1000)