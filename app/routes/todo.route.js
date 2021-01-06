const express = require("express");
const router = express.Router();

const testControl = require("../controllers/todo.control")

router.get("/todo", testControl.getAll)
router.post("/todo", testControl.newTodo)
router.put("/todo", testControl.updateTodo)
router.put("/isdone", testControl.toogleDone)
router.delete("/todo/:id", testControl.deleteTodo)

module.exports = router;