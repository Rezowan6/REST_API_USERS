const { v4: uuidv4 } = require("uuid");

let users = [
  {
    id: uuidv4(),
    userName: "Rezowan Miya",
    email: "rezowanmiya6@gmail.com"
  }
];

module.exports = users;
