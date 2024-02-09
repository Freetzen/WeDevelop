const adminModel = require('../models/usuariosAdmin')

const findAdmin = async () => {
    try {
        return await adminModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

const createAdmin = async (user) => {
    try {
        const newUser = await adminModel.create(user);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {findAdmin, createAdmin}