const projectModel = require('../models/projectModel')


const findProject = async (page, limit) => {
    try {
        return await projectModel.paginate({}, {page, limit});
    } catch (error) {
        throw new Error(error);
    }
}
 
const findProjectByCategory = async (category) => {
    try {
        return await projectModel.find({"category": category})
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

module.exports = { findProject, findProjectById, createProject, deleteProject, updateProject, findProjectByCategory}