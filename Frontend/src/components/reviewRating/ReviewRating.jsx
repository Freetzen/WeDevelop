import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "./ReviewRating.module.css";

export default function ReviewRating(){
    const [data, setData] = useState({});

  useEffect(() => {
    const fetchAverageRating = async () => {
      try {
        const response = await axios.get('http://localhost:3001/reviewsRating');
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener el promedio de ratings:', error);
      }
    };
    fetchAverageRating();
  }, []);

  const renderStars = () => {
    const numStars = Math.round(data.rating);
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<FaStar key={i} style={{color: "gold"}}/>);
    }
    return stars;
  };

  return (
    <div className={style.container}>
        <div className={style.subContainer}>
            <h3><span className={style.rating}>{data.rating}</span> <br/>Rating: {renderStars()}</h3>
            <p>(Total comments: {data.amount})</p>
        </div>
      
    </div>
  );
};