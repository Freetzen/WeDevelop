import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import style from "./ReviewCard.module.css";

export default function ReviewCard({ review }) {
  
    const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(review.rating);
    const hasHalfStar = review.rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="gold" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="gold" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} color="lightgrey" />);
    }
    return stars;
  };

  return (
    <div className={style.container}>
        <div className={style.firstRow}>
             <div className={style.image}>
                 <img src={review.image} />
             </div>
            <h4 className={style.name}>{review.name}</h4>
        </div>  
        <div className={style.stars}>
            {renderStars()}
        </div>
        
        
        <p className={style.fecha}>{review.date}</p>
        <p className={style.message}>{review.message}</p>
    </div>
  );
};
