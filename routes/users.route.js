const {
  getAllUsers,
  createUsers,
  updateUser,
  deleteUser,
  getOneUser,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUsers);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
