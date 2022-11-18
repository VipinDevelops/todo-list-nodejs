const express = require("express");
const Router = express.Router();
const TodoController = require("../controllers/Todo.controller");

Router.get("/", TodoController.getTodos);

Router.get("/:id", TodoController.getTodo);

Router.post("/", TodoController.postTodo);

Router.put("/:id", TodoController.putTodo);

Router.delete("/:id", TodoController.deleteTodo);

module.exports = Router;
