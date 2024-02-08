const forModel = require('../models/formModel')

const findForm = async () => {
    try {
        return await forModel.find();
    } catch (error) {
        throw new Error(error);
    }
}
 
const findFormById = async (id) => {
    try {
        return await forModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const createForm = async (form) => {
    try {
        const newUser = await forModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteForm = async (id) => {
    try {
        return await forModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const updateForm = async (id, info) => {
    try {
        return await forModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { findForm, findFormById, createForm, deleteForm, updateForm}