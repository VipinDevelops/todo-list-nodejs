const express = require("express");
const { getTodos } = require("../controllers/Todo.controller");
const Router = express.Router();

Router.get("/", getTodos);

module.exports = Router;
