const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const carScheme = new Schema(
    {
        id: Number,
        model: String
    }, 
    {
        versionKey: false
    }
);

module.exports = mongoose.model("Car", carScheme);




