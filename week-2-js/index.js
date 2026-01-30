// Q1
const user = {
    name: "Ayush",
    age: 24
}
const greetUser = (user) => {
    console.log(`Hello ${user.name}, Age: ${user.age}`)
}
greetUser(user)

// Q2
const person = {
  name: "nami",
  age: 20,
  gender: "female",
};
const person2 = {
  name: "luffy",
  age: "19",
  gender: "male",
};
const person3 = {
    name: "bon clay",
    age: 32,
    gender: null
}

const greetIng = (user) => {
  if (user.gender == "female") {
    console.log(`Hi Mrs ${user.name}, your age is ${user.age}`);
  } else if (user.gender == "male") {
    console.log(`Hi Mr ${user.name}, your age is ${user.age}`);
  } else {
    console.log(`Hi ${user.name}, your age is ${user.age}`)
  }
};
greetIng(person3);

Q3
const numbers = [12, 23, 34, 45, 62, 23, 5, 23, 53, 42, 34, 52];

const checkEven = (n) => {
  isEven = [];
  for (let i = 0; i <= n.length; i++) {
    if (n[i] % 2 == 0) {
      isEven.push(n[i]);
    }
  }
  return isEven;
};

Q4
console.log(checkEven(numbers));

const users = [
  {
    name: "ayush",
    age: 21,
  },
  {
    name: "nami",
    age: 19,
  },
  {
    name: "chopper",
    age: 16,
  },
];

const isLegal = (user) => {
  let legalList = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i].age >= 18) {
      legalList.push(user[i]);
    }
  }
  return legalList;
};

console.log(isLegal(users));
