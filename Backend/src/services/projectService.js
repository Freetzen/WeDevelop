const projectModel = require('../models/projectModel')

const findProject = async () => {
    try {
        return await projectModel.find();
    } catch (error) {
        throw new Error(error);
    }
}
 
const findProjectById = async (id) => {
    try {
        return await projectModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const createProject = async (form) => {
    try {
        const newUser = await projectModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteProject = async (id) => {
    try {
        return await projectModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const updateProject = async (id, info) => {
    try {
        return await projectModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { findProject, findProjectById, createProject, deleteProject, updateProject}