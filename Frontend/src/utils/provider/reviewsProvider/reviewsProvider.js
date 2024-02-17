import axios from "axios"

const reviewsProvider = {

    async getReview() {
        try {
            const getReview = await axios.get(`/reviews`)
            return getReview.data
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