import style from "./ReviewsAll.module.css";
import { useEffect, useState } from "react";
import reviewsProvider from "../../utils/provider/reviewsProvider/reviewsProvider";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import PaginateReviews from "../../components/paginateReviews/PaginateReviews";

export default function ReviewsAll() {

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("All");

  
  const dataInit = async (page = 1) => {
    try {
      const response = await reviewsProvider.getReview(page);
      setReviews(response);
    } catch(error) {
      console.error('Error al obtener reviews:', error);
    }
  }
  
  const bringData = async (page = 1) => {
    try {
      let ratingNumber = parseInt(rating); 
      const response = await reviewsProvider.getReviewsByRating({rating: ratingNumber, page: page}); 
      setReviews(response);
    } catch(error) {
      console.error('Error al obtener reviews por rating:', error);
    }
  }
  
  useEffect(() => {
    if(rating !== "All") bringData();
    else dataInit();
  }, [rating])


  const handleChange = (e) => {
      const ratingSelected = e.target.value;
      setRating(ratingSelected);
  }

  return (
    <div className={style.container}>

      <div className={style.titulo}>
        <h3>Reviews and comments</h3>
      </div>

      <div className={style.filtro}>
        <select onChange={handleChange}>
          <option value="All">All reviews</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>
      </div>

      <div className={style.reviewsContainer}>
        { 
        reviews.length ?
        reviews.map((review, index) => <ReviewCard key={index} review={review} />) : 
        <p className={style.notFound}>No reviews found with that rating</p> 
        }
      </div>

      <div>
        <PaginateReviews />
      </div>
  </div>
  )
}
