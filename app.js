//Import all the necessary packages
const express = require("express");
const cors = require("cors");

//Importing TodoRoutes
const TodoRoutes = require("./routes/Todo.route");

//Creating and express app
const app = express();

//PORT and host
const host = "localhost";
const PORT = 8000;

//CORS middlware to allow cross origin resources sharing
app.use(cors());

//Middleware to convert our request data into JSON format
app.use(express.json());

//Using todoRoutes
app.use("/api", TodoRoutes);

//Welcome to API response
app.get("/", (req, res) => {
  res.send("Hello There API is now Working");
});

//App listening on PORT 8000
app.listen(PORT, () => {
  console.log(`Server is now Started on http://${host}:${PORT}`);
});
