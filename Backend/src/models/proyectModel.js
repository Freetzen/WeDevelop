const { Schema, model } = require('mongoose')

const proyectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    images: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const proyectModel = model("proyect", proyectSchema)

module.exports = proyectModel