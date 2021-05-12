const express = require("express");
const app = express();

// Antes de los endpoints, usamos los middlewares
app.use(express.json());

app.get("/", (req, res) => {
    //res.json({ message: "Petición GET recibida correctamente" });
    res.json({
        "name": "Oliver",
        "profesion": "Full Stack Developer",
        "age": 25,
        "address": {
            "street": "Larios Street, 15",
            "city": "Málaga"
        }
    });
});

app.put("/:id", (req, res) => {
    let id = req.params.id;
    res.json({ message: `Petición PUT con parámetro : ${id}`});
});

app.delete("/:id", (req, res) => {
    let id = req.params.id;
    res.json({ message: `Petición DELETE con parámetro : ${id}`});
});

app.post("/", (req, res) => {
    let body = req.body;

    if (body.username) {
        //res.status(200).json({message: `Recibido username: ${body.username}`});
        res.status(200).json({
            "name": "Oliver",
            "profesion": "Full Stack Developer",
            "age": 25,
            "address": {
                "street": "Larios Street, 15",
                "city": "Málaga"
            }
        });
        
    } else {
        res.status(400).json({ok: false, message: "El username es obligatorio"});
    }
});

app.listen(3000);