const express = require("express");

const Router = express.Router;

Router.get("/", (res, req) => {
  res.send("Response from the Get router");
});

module.exports = Router;
