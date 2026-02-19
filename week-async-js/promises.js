const fs = require("fs");

// fs.readFile("a.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// promisified fs.readFile

const fsReadFilePromisified = (fileName, encoding) => {
  return new Promise((reject, resolve) => {
    fs.readFile(fileName, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

fsReadFilePromisified("a.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((er) => {
    console.log(er);
  });

// promisified setTimeout

const setTimeoutPromisified = (delay) => {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      resolve;
    }, delay);
  });
};

setTimeoutPromisified(3000).then(() => {
  console.log("time has passed");
});
