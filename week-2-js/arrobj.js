const detail = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60],
};

const addValue = (n) => {
  let finalValue = { food: 0, travel: 0, bills: 0 };

  const keys = Object.keys(n);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const array = n[key];
    let sum = 0;
    for (let k = 0; k < array.length; k++) {
      sum += array[k];
    }
    finalValue[key] = sum;
  }
  return finalValue;
};

console.log(addValue(detail));
