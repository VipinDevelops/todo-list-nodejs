const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello API is now Working");
});

app.listen(PORT, () => {
  console.log(`Server is now Started on Port ${PORT}`);
});
