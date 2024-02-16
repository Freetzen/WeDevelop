import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import style from "./ReviewForm.module.css";
import reviewsProvider from '../../utils/provider/reviewsProvider/reviewsProvider';

const ReviewForm = () => {
  const { user } = useAuth0();

  const [info, setInfo] = useState({
    name: user.name,
    email: user.email,
    image: user.picture,
    rating: 5,
    message: ''
  });


  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await reviewsProvider.postReview(info)
    setInfo({
      name: '',
      email: '',
      image: '',
      rating: 5,
      message: ''
    })
    return window.alert('Review uploaded successfully')
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.linea}>
          <label>Message: </label>
          <textarea key='message' name='message' value={info.message} rows="5" onChange={handleChange} />

        </div>
        <div className={style.linea}>
          <label>
            Review:
          </label>
          <select key='rating' name='rating' value={info.rating} onChange={handleChange}>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}star{value !== 1 && 's'}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={info.message === ''}>Send review!</button>
      </form>
    </div>

  );
};

export default ReviewForm;