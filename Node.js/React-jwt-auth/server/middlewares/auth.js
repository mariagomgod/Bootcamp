const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token = req.get("authorization");
    token = token && token.split(" ")[1];
    
    jwt.verify(token, process.env.SEED, (error, payload) => {
        if (error) {
            res.status(401).json({
                ok: false,
                error
            })
        } else {
            next(); // llama a la siguiente pieza de middleware
        }
    });
};

module.exports = verifyToken;