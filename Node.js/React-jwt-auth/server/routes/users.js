const ramda = require("ramda");
const bcrypt = require("bcrypt");

const express = require("express");
const router = express.Router();

const User = require("../models/user");
const verifyToken = require("../middlewares/auth");

const middleware1 = (req, res, next) => {
    console.log("Hola desde el middleware1");
    next(); // llama a la siguiente pieza de middleware
}

const middleware2 = (req, res, next) => {
    console.log("Hola desde el middleware2");
    next(); // llama a la siguiente pieza de middleware
}

router.get("/", verifyToken, (req, res) => {
    console.log("Hola desde dentro del get");
    // Similar al find de Mongo. Si el filtro está vacío,
    // me devuelve todos los documentos de la colección.
    const PAGE_SIZE = 2;
    const page = req.query.page || 1;

    User.find({active: true})
    .skip((page - 1) * PAGE_SIZE) // número de documentos que saltará
    .limit(PAGE_SIZE) // número de documentos que devolverá
    .exec((error, users) => {
        if (error) {
            res.status(400).json({ ok: false, error });
        } else {
            res.status(200).json({ ok: true, users });
        }
    })
});

router.post("/", (req, res) => {
    let body = req.body;

    const user = new User({
        username: body.username.toLowerCase(),
        email: body.email.toLowerCase(),
        password: bcrypt.hashSync(body.password, 10)
    });

    user.save((error, savedUser) => {
        if (error) {
            res.status(400).json({ ok: false, error });
        } else {
            res.status(201).json({ ok: true, savedUser });
        }
    });

    // if (body.username) {
    //     res.status(200).json({message: `Recibido username: ${body.username}`});

    // } else {
    //     res.status(400).json({ok: false, message: "El username es obligatorio"});
    // }
});

// método PUT : modificar documentos de la base de datos
router.put("/:id", (req,res) => {
    const id = req.params.id;
    const body = ramda.pick(["username", "email"], req.body);

    User.findByIdAndUpdate(
        id, 
        body, 
        { new: true, runValidators: true, context: "query" }, // options
        (error, updateUser) => {
            if (error) {
                res.status(400).json({ ok: false, error });
            } else {
                res.status(200).json({ ok: true, updateUser });
            }
        }
    );
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;

    /* User.findByIdAndRemove(id, (error, removedUser) => {
        if (error) {
            res.status(400).json({ ok: false, error });
        } else {
            res.status(200).json({ ok: true, removedUser });
        }
    }); */

    User.findByIdAndUpdate(
        id, 
        { active: false }, 
        { new: true, runValidators: true, context: "query" }, // options
        (error, updateUser) => {
            if (error) {
                res.status(400).json({ ok: false, error });
            } else if (!updateUser) {
                res.status(400).json({ ok: false, error: "User not found"} );
            } else {
                res.status(200).json({ ok: true, updateUser });
            }
        }
    );
});

module.exports = router; // exportamos por defecto