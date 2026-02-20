const fs = require("fs");

const fsReadFilePromisified = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject("error while reading the file");
      } else {
        resolve(data);
      }
    });
  });
};

const cleanFile = async (fileName, cb) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject("error while reading the file");
      } else {
        const trimmedContent = data.trim();
        fs.writeFile("a.txt", trimmedContent, (err, dat) => {
          if (err) {
            reject;
          } else {
            resolve(dat);
          }
        });
      }
    });
  });
};

const main = async () => {
  try {
    await cleanFile("a.txt");
    console.log("file modified");
  } catch (e) {
    console.log("error while cleaning the file");
  }
};

main();

const readFile = async () => {
  const fileContent = await fsReadFilePromisified("a.txt", "utf-8");
  const fileContent2 = await fsReadFilePromisified("b.txt", "utf-8");

  console.log(fileContent);
  console.log(fileContent2);
};

readFile();

console.log("logging asynchronously");
console.log("logging asynchronously");

// do -  clean file function i-promise based no async await, ii-promise based use async await
