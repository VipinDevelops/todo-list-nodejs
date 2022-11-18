const express = require("express");
const Router = express.Router();
const TodoController = require("../controllers/Todo.controller");

Router.get("/", TodoController.getTodos);

Router.get("/:id", TodoController.getTodo);

Router.post("/", TodoController.postTodo);

Router.put("/:id");

Router.delete("/:id");
module.exports = Router;
