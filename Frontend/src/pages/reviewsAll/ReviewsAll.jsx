import style from "./ReviewsAll.module.css";
import { useEffect, useState } from "react";
import reviewsProvider from "../../utils/provider/reviewsProvider/reviewsProvider";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import PaginateReviews from "../../components/paginateReviews/PaginateReviews";
import { useTranslation } from "react-i18next";

export default function ReviewsAll() {
  const [t, i18n] = useTranslation("global");

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("All");
  const [totalInfo, setTotalInfo] = useState([])


  
  const dataInit = async (page = 1) => {
    try {
      const response = await reviewsProvider.getReviewsAll(page);
      console.log(response);
      setReviews(response.docs);
      setTotalInfo(response);
    } catch(error) {
      console.error(t("RatingHome.ReviewsAll.error1"), error);
    }
  }
  
  const bringData = async (page = 1) => {
    try { 
      const ratingNumber = Number(rating);
      let obj = {
        rating: ratingNumber,
        page
      };
      const response = await reviewsProvider.getReviewsByRating(obj); 
      setReviews(response.docs);
      setTotalInfo(response);
    } catch(error) {
      console.error(t("RatingHome.ReviewsAll.error2"), error);
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

  return(
    <div className={style.container}>

      <div className={style.titulo}>
        <h3>{t("RatingHome.ReviewsAll.title")}</h3>
      </div>

      <div className={style.filtro}>
        <select onChange={handleChange}>
          <option value="All">{t("RatingHome.ReviewsAll.all")}</option>
          <option value="5">{t("RatingHome.ReviewsAll.5stars")}</option>
          <option value="4">{t("RatingHome.ReviewsAll.4stars")}</option>
          <option value="3">{t("RatingHome.ReviewsAll.3stars")}</option>
          <option value="2">{t("RatingHome.ReviewsAll.2stars")}</option>
          <option value="1">{t("RatingHome.ReviewsAll.1star")}</option>
        </select>
      </div>

      <div className={style.reviewsContainer}>
        { 
        reviews.length ?
        reviews.map((review, index) => <ReviewCard key={index} review={review} />) : 
        <p className={style.notFound}>{t("RatingHome.ReviewsAll.noReviewsStar")}</p> 
        }
      </div>
      
       <PaginateReviews totalInfo={totalInfo} bringData={bringData} dataInit={dataInit} rating={rating}/> 
       
    
      
  </div>
  )
}
