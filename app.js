require("./configs/db")
const express = require("express");
const path = require("path");
const cors = require("cors");

// import users models---
const usersRouter = require("./routes/users.route");

const app = express();

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// users router--
app.use("/users", usersRouter);

// home route
app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "views", "index.html"));
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: "404 page not found",
  });
});

// 500 handler
app.use((err, req, res, _next) => {
  res.status(500).json({
    message: "Something broke!",
  });
});

module.exports = app;
