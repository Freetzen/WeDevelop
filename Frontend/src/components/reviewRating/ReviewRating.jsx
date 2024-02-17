import { FaStar } from "react-icons/fa";
import style from "./ReviewRating.module.css";

export default function ReviewRating({ totalReviews }) {

  const sum = totalReviews.reduce((sum, rating) => sum + rating.rating, 0)
  const numReviews = totalReviews.length
  const average = sum / numReviews

  const renderStars = () => {
    const numStars = Math.round(average);
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<FaStar key={i} style={{ color: "gold" }} />);
    }
    return stars;
  };

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <h3><span className={style.rating}>{average?.toFixed(1)}</span> <br />Rating: {renderStars()}</h3>
        <p>(Total comments: {numReviews})</p>
      </div>

    </div>
  );
};