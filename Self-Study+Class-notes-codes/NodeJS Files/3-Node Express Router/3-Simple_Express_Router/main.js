const port = 3000,
  express = require("express"),
  app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello, Universe</h1>`);
});

app.get("/items", (req, res) => {
  res.send(`This is the page for vegetables`);
});

app.get("/menu", (req, res) => {
  res.send(`This is the page for menu`);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
