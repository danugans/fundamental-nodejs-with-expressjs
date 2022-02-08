const express = require("express");

const router = express.Router();

// Controller
const { getTodos, getTodo, addTodo, updateTodo, deleteTodo } = require("../controllers/todo");
// Get getUsers and getUser from user controller here ...
const { addUsers } = require("../controllers/user");
const { getUsers, getUser } = require("../controllers/user");
// Route
router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.post("/todo", addTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

router.post("/users", getUsers);
router.get("/users/", getUser);
router.get("/user/:id", getUser);

// Create Route for fetching user data here ...

module.exports = router;
