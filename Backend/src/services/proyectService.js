const proyectModel = require('../models/proyectModel')

const findProyect = async () => {
    try {
        return await proyectModel.find();
    } catch (error) {
        throw new Error(error);
    }
}
 
const findProyectById = async (id) => {
    try {
        return await proyectModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const createProyect = async (form) => {
    try {
        const newUser = await proyectModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteProyect = async (id) => {
    try {
        return await proyectModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const updateProyect = async (id, info) => {
    try {
        return await proyectModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { findProyect, findProyectById, createProyect, deleteProyect, updateProyect}