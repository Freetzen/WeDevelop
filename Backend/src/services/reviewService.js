const reviewModel = require('../models/reviewModel');

const findReviews = async () => {
    try {
        return await reviewModel.find();
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {findReviews};