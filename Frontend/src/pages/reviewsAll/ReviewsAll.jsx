import style from "./ReviewsAll.module.css";
import { useEffect, useState } from "react";
import reviewsProvider from "../../utils/provider/reviewsProvider/reviewsProvider";
import ReviewCard from "../../components/reviewCard/ReviewCard";

export default function ReviewsAll() {

  const [reviews, setReviews] = useState([]);
  const [stars, setStars] = useState("All");
  let filteredReviews = [];

  if(stars === "All") {
    filteredReviews = reviews;
  } else {
    filteredReviews = reviews.filter(review => review.rating === parseInt(stars));
  }


  useEffect(() => {
     bringData()
  }, [])

  const bringData = async () => {
    const response = await reviewsProvider.getReview();
    setReviews(response)
     }

  const handleChange = (e) => {
      e.preventDefault();
      setStars(e.target.value);
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
        filteredReviews.length ?
        filteredReviews.map((review, index) => <ReviewCard key={index} review={review} />) : 
        <p className={style.notFound}>No reviews found with that rating</p> 
        }
      </div>

    </div>
  )
}
