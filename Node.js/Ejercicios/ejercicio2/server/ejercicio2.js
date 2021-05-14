require("./config/config");

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const todos = require("./routes/todos");

// Antes de los endpoints, usamos los middlewares
app.use(express.json());

app.use("/todos", todos);

mongoose.connect("mongodb://localhost:27017/todos", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
});
const db = mongoose.connection;

db.on("error", err => console.log("Connection to DB failed ", err));
db.once("open", () => console.log("Connected to DB successfuly"));

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT);
});