const reviewModel = require('../models/reviewModel');

const findReviews = async () => {
    try {
        return await reviewModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

const findReviewsAll = async (page, limit) => {
    try {
        return await reviewModel.paginate({}, { page, limit });
    } catch (error) {
        throw new Error(error);
    }
}

const findReviewByRating = async (rating, page, limit) => {
    try {
        return await reviewModel.paginate({ rating: rating }, { page, limit });
    } catch (error) {
        throw new Error(error);
    }
}

const createReview = async (form) => {
    try {
        const newUser = await reviewModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = { findReviews, findReviewsAll, createReview, findReviewByRating };