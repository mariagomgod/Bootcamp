const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: [true, "Title is required"]
    },
    completed: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }
});

todoSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"});

module.exports = mongoose.model("Todo", todoSchema);
