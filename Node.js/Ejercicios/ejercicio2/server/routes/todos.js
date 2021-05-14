const express = require("express");
const router = express.Router();
const ramda = require("ramda");
const Todo = require("../models/todo");

router.get("/", (req, res) => {
    Todo.find({"active": true}, {"__v": 0}).exec((error, todos) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(todos);
        }
    });
});

router.post("/", (req, res) => {

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

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const body = ramda.pick(["title", "completed", "active"], req.body);
    body.completed = !body.completed;

    Todo.findByIdAndUpdate(
        id, 
        body, 
        { new: true, runValidators: true, context: "query" }, // options
        (error, updateTodo) => {
            if (error) {
                res.status(400).json({ ok: false, error });
            } else if (!updateTodo) {
                res.status(404).json({ ok: false, error: "Todo not found"} );
            } else {
                res.status(200).json({ ok: true, updateTodo });
            }
        }
    );
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;

    Todo.findByIdAndUpdate(
        id, 
        { active: false }, 
        { new: true, runValidators: true, context: "query" }, // options
        (error, updateTodo) => {
            if (error) {
                res.status(400).json({ ok: false, error });
            } else if (!updateTodo) {
                res.status(404).json({ ok: false, error: "Todo not found"} );
            } else {
                res.status(200).json({ ok: true, updateTodo });
            }
        }
    );
});

module.exports = router; // exportamos por defecto