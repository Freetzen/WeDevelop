const reviewModel = require('../models/reviewModel');

const findReviews = async () => {
    try {
        return await reviewModel.find();
    } catch (error) {
        throw new Error(error);
    }
}
const createRevew = async (form) => {
    try {
        const newUser = await reviewModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = { findReviews, createRevew };