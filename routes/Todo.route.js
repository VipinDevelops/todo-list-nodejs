// Define Router
const express = require("express");
const Router = express.Router();

//Imorting all the controllers
const TodoController = require("../controllers/Todo.controller");

//GET all the tods
Router.get("/", TodoController.getTodos);

//GET one Todo
Router.get("/:id", TodoController.getTodo);

//CREATE one todo
Router.post("/", TodoController.postTodo);

//UPDATE one todo
Router.put("/:id", TodoController.putTodo);

//DELETE one todo
Router.delete("/:id", TodoController.deleteTodo);

//Export Router
module.exports = Router;
