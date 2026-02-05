const { v4: uuidv4 } = require("uuid");
const users = require("../models/users.model");

// get users---
const getAllUsers = async (req, res) => {
  try {
    const allUser = await users.find();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// getOne User---
const getOneUser = async (req, res) => {
  try {
    const user = await users.findOne({ id: req.params.id });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// create users---
const createUsers = async (req, res) => {
  try {
    const { userName, email } = req.body;

    if (!userName || !email) {
      return res.status(400).json({
        message: "userName and email are required",
      });
    }
    // check duplicate email--
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "Email already exisits",
      });
    }

    const newUser = new users({
      id: uuidv4(),
      userName,
      email,
    });

    const saveUser = await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      data: saveUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// deleteUser User---
const deleteUser = async (req, res) => {
  try {
    const user = await users.deleteOne({ id: req.params.id });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({ message: "user is deleted successfully!" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// update user---
const updateUser = async (req, res) => {
  try {
    const user = await users.findOne({ id: req.params.id });

    user.userName = req.body.userName;
    user.email = req.body.email;
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// deleteUser--
// const deleteUser = (req, res) => {
//   const userId = req.params.id;

//   const index = users.findIndex((user) => user.id === userId);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users.splice(index, 1);
//   res.status(200).json(users);
// };

module.exports = {
  getAllUsers,
  getOneUser,
  createUsers,
  updateUser,
  deleteUser,
};
