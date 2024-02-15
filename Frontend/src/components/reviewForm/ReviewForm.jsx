import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import style from "./ReviewForm.module.css";
import axios from 'axios';

const ReviewForm = ({handleNewReview}) => {
  const { user } = useAuth0();
  const [rating, setRating] = useState(1);
  const [message, setMessage] = useState('');

  const newMessage = {
    name: user.name,
    email: user.email,
    image: user.picture,
    rating, 
    message, 
    date: new Date().toLocaleDateString()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/reviews', newMessage);
      handleNewReview(newMessage);
      setRating(1);
      setMessage('');
    } catch (error) {
      console.error('Error al enviar datos al servidor:', error);
    }
  };

  return (
    <div className={style.container}>
        <form className={style.form}>
            <div className={style.linea}>
                <label>
                Message:
                </label>
                <textarea value={message} rows="5" onChange={(e) => setMessage(e.target.value)} />
                
            </div>
            <div className={style.linea}>
                <label>
                Review: 
                </label>
                <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                    {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                        {value}star{value !== 1 && 's'}
                    </option>
                    ))}
                </select>
            </div>
            {(message !== '') && (
            <button onClick={handleSubmit} type="submit">Send review!</button>
               )} 
    </form>
    </div>
    
  );
};

export default ReviewForm;