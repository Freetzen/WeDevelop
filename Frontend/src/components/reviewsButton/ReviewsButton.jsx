import { Link } from "react-router-dom";
import style from "./ReviewsButton.module.css";



export default function ReviewsButton() {
    return(
     <div className={style.container}>
        <Link to="/reviews">
            <button className={style.boton}>View all reviews</button>
       </Link>
     </div>
    )
}