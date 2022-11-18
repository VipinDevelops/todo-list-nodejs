const express = require("express");
const TodoController = require("../controllers/Todo.controller");
const Router = express.Router();

Router.get("/", TodoController.getTodos);
Router.post("/");
module.exports = Router;
