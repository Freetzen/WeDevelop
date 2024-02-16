import { useEffect, useState } from "react";
import ReviewForm from "../reviewForm/ReviewForm";
import ReviewCard from "../reviewCard/ReviewCard";
import style from "./Review.module.css";
import ReviewRating from "../reviewRating/ReviewRating";
import { useAuth0 } from "@auth0/auth0-react";
import reviewsProvider from "../../utils/provider/reviewsProvider/reviewsProvider";

export default function Review() {
  const { isAuthenticated } = useAuth0();
  const [messages, setMessages] = useState([]);
  const [totalReviews, setTotalReviews] = useState([])

  const bringData = async () => {
    const response = await reviewsProvider.getReview()
    setTotalReviews(response)
    const sortingResponse = response.sort((a, b) => b.rating - a.rating).slice(0, 5)
    setMessages(sortingResponse);
  }

  useEffect(() => {
    bringData()
  }, []);

  return (
    <div className={style.container}>
      <div><ReviewRating totalReviews={totalReviews} /></div>
      <h2>Reviews and comments</h2>
      <div className={style.cardContainer}>
        {messages?.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      {isAuthenticated ?
        <div className={style.containerTitle}>
          <h2>Leave us a review</h2>
          <ReviewForm />
        </div>
        : <h3>You must be singed up to send review</h3>
      }
    </div>
  );
}