const preferenceModel = require('../models/preferenceModel');

const findPreference = async () => {
    try {
        return await preferenceModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

const createPreference = async (preference) => {
    console.log("createPreference:",preference)
    try {
        
        const newPreference = await preferenceModel.create(preference);
        return newPreference;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {findPreference, createPreference}