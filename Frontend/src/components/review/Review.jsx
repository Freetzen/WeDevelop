import { useEffect, useState } from "react";
import axios from 'axios';
import ReviewForm from "../reviewForm/ReviewForm";
import ReviewCard from "../reviewCard/ReviewCard";
import style from "./Review.module.css";
import ReviewRating from "../reviewRating/ReviewRating";
import { useAuth0 } from "@auth0/auth0-react";

export default function Review() {
    const { isAuthenticated } = useAuth0();
    const [reviews, setReviews] = useState({});
    const [messages, setMessages] = useState([]);
    const message = messages.filter(message => message.date);

    const handleReviewSubmit = (review) => {
      setReviews(review);
    };

  

    useEffect(() => {
      const fetchMessages = async () => {
        try {
          const response = await axios.get('http://localhost:3001/reviews');
          setMessages(response.data);
        } catch (error) {
          console.error('Error al recuperar los mensajes:', error);
        }
      };
      fetchMessages();
    },[]);

    useEffect(() => {
      const sendReviewsToServer = async () => {
        try {
            const response = await axios.post('http://localhost:3001/reviews', reviews);
            console.log('Datos enviados al servidor:', response.data);
         } catch (error) {
          console.error('Error al enviar datos al servidor:', error);
        }
      };
      if (reviews) {
        sendReviewsToServer();
      }
    }, [reviews]);
  
    return (
      <div className={style.container}>
        <div><ReviewRating /></div>
        <h2>Reviews and comments</h2>
        <div className={style.cardContainer}>
          {message.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
        </div>

        { isAuthenticated ?
        <div className={style.containerTitle}>
          <h2>Leave us a review</h2>
          <ReviewForm onSubmit={handleReviewSubmit} />
        </div>
        : <h3>You must be singed up to send review</h3>
        }
      </div>
    );
}