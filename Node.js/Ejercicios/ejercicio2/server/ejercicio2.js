require("./config/config");

const express = require("express");
const mongoose = require("mongoose");
const Todo = require('./models/todo');
const app = express();

// Antes de los endpoints, usamos los middlewares
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/todos", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
});
const db = mongoose.connection;

app.get("/todos", (req, res) => {
    Todo.find({"active": true}, {"_id": 0, "__v": 0}).exec((error, todos) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(todos);
        }
    });
});

app.post("/todos", (req, res) => {

    let body = req.body;

    let todo = new Todo({
        title: body.title,
        completed: body.completed,
        active: body.active
    });

    todo.save((error, newTodo) => {
        if (error) {
            res.status(400).json(error);
        } else {
            res.status(200).json(newTodo);
        }
    });
});

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT);
});