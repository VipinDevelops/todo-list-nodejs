const express = require("express");
const TodoRoutes = require("./routes/Todo.route");
const app = express();
const host = "localhost";
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", TodoRoutes);

app.get("/", (req, res) => {
  res.send("Hello There API is now Working");
});

app.listen(PORT, () => {
  console.log(`Server is now Started on http://${host}:${PORT}`);
});
