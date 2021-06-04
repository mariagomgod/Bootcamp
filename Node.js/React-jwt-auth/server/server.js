// Importamos nuestro archivo config con las variables de entorno
require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors())

const users = require("./routes/users");
const login = require("./routes/login");

// Antes de los endpoints, usamos los middlewares
app.use(express.json());

app.use(require("./routes/index"));


mongoose.connect("mongodb://localhost:27017/users", {
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