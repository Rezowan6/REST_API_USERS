const { v4: uuidv4 } = require("uuid");
const users = require("../models/users.model");

// get users---
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

// create users---
const createUsers = (req, res) => {
  const { userName, email } = req.body;

  if (!userName || !email) {
    return res.status(400).json({
      message: "userName and email are required",
    });
  }

  const newUser = {
    id: uuidv4(),
    userName,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// update user---
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { userName, email } = req.body;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.userName = userName ?? user.userName;
  user.email = email ?? user.email;

  res.status(200).json(user);
};

// deleteUser--
const deleteUser = (req, res) => {
  const userId = req.params.id;

  const index = users.findIndex((user) => user.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.status(200).json(users);
};

module.exports = { getAllUsers, createUsers, updateUser, deleteUser };
