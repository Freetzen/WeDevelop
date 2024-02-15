
const { findReviews } = require("../services/reviewService");


const getReviewAvarage = async (req, res) => {
    try {
        const reviews = await findReviews();
        const reviewsTotal = reviews.filter(review => review.name);
      if (reviews.length > 0) {
        const totalStars = reviewsTotal.reduce((accum, review) => accum + review.rating, 0);
        const averageRating = totalStars / reviewsTotal.length;
        const data = {
            rating: averageRating,
            amount: reviewsTotal.length
        }
        res.json(data);
      } else {
        res.json(0); 
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al calcular el promedio de los ratings' });
    }
  };

module.exports = getReviewAvarage;