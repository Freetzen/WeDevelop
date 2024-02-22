import axios from "axios"

const reviewsProvider = {
    async getReview(page) {
        try {
            if (!page) page = 1;
            const getReviews = await axios.get(`/reviews?page=${page}`);
            return getReviews.data;
        } catch (error) {
            return error.message;
        }
    },
    async getReviewsByRating({rating, page}) {
        try {
            const getReviews = await axios.get(`/reviews/rating?rating=${rating}&page=${page}`)
            return getReviews.data
        } catch (error) {
            return error.message
        }
    },
    async postReview(project) {
        try {
            const newReview = await axios.post(`/reviews`, project)
            return newReview
        } catch (error) {
            return error.message
        }
    },

}

export default reviewsProvider