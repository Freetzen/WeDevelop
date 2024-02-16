import { useEffect, useState } from "react";
import axios from 'axios';
import ReviewForm from "../reviewForm/ReviewForm";
import ReviewCard from "../reviewCard/ReviewCard";
import style from "./Review.module.css";
import ReviewRating from "../reviewRating/ReviewRating";
import { useAuth0 } from "@auth0/auth0-react";

export default function Review() {
    const { isAuthenticated } = useAuth0();
    const [ newReview , setNewReview] = useState({});
    const [messages, setMessages] = useState([]);
    const message = messages?.filter(msg=> msg.message);

    const handleNewReview = (newReview) => {
      setNewReview(newReview);
    }
    
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
    },[newReview]);
  
    return (
      <div className={style.container}>
        <div><ReviewRating /></div>
        <h2>Reviews and comments</h2>
        <div className={style.cardContainer}>
          {message?.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
        </div>

        { isAuthenticated ?
        <div className={style.containerTitle}>
          <h2>Leave us a review</h2>
          <ReviewForm handleNewReview={handleNewReview} />
        </div>
        : <h3>You must be singed up to send review</h3>
        }
      </div>
    );
}