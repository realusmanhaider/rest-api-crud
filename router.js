const router = require("express").Router();

const { getTodos , createTodo ,updateTodo, deleteTodo } = require("./controllers/todo");


router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);


router.get("/todos", getTodos);
router.post("/todos", createTodo);


router.get("/", (req, res) => {

    res.send("Let's build it");

})


module.exports = router