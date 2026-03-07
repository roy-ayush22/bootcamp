const express = require("express");
const app = express();
app.use(express.json());

app.get("/sum/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.json({ ans: a + b });
});
app.get("/sub/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.json({ ans: a - b });
});
app.get("/multiply/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.json({ ans: a * b });
});
app.get("/divide/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.json({ ans: a / b });
});

app.listen(5500, () => {
  console.log("listening on port 5500");
});
