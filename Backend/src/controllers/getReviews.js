const { findReviews } = require("../services/reviewService");

const getReviews = async (req, res) => {
    try {
        let page = req.query.page;
        const limit = 6;
        const reviews = await findReviews(page, limit);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = getReviews;