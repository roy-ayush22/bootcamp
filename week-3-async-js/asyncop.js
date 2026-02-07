const fs = require("fs")

const data = fs.readFileSync("a.txt", "utf-8")
const cleanData = data.replace(/\s+/g, ' ')
const writeData = fs.writeFileSync("a.txt", cleanData, "utf-8")