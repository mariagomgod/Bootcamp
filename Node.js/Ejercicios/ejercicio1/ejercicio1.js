require("./config/config");

const express = require("express");
const app = express();

// Antes de los endpoints, usamos los middlewares
app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
    const user = {name: "John", email: "john@gmail.com"}
    res.json({ ok: true, results: users });
});

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    res.json({ id });
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;

    const removedUser = users.splice(id, 1);

    res.status(200).json(removedUser);
});

app.post("/users", (req, res) => {
    const body = req.body; // necesita el middleware, definido arriba: app.use(express.json());

    if (body.username) {
        res.status(400).json({ ok: false, message: "Name is required" });
    } else {
        users.push(body);
        res.status(201).json({ user: body });
    }
});

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT);
});