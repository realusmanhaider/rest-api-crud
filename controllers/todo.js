const Todo = require("../Model/todo");


const getTodos = (req, res) => {
    Todo.find()
        .exec() // Execute the query
        .then(todos => {
            res.json(todos);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while fetching todos." });
        });
};



  const createTodo = (req, res) => {
    const { title, description } = req.body;
    const newTodo = new Todo({
        title,
        description
    });

    newTodo.save() // Save the document and return a Promise
        .then(savedTodo => {
            res.json(savedTodo);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while saving the todo." });
        });
};


const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: req.params.todoID },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    completed: req.body.completed,
                },
            },
            { new: true }
        );
        
        res.json(updatedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the todo." });
    }
};


const deleteTodo = async (req, res) => {
    try {
        await Todo.deleteOne({ _id: req.params.todoID });
        res.json({ message: "Todo Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while deleting the todo." });
    }
};

  


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
  };

  
  