import { Link } from "react-router-dom";
import style from "./ProjectsButton.module.css";



export default function ProyectsButton() {
    return(
     <div className={style.container}>
        <Link to="/projects">
            <button className={style.boton}>Show Projects</button>
       </Link>
     </div>
      
    
    )
}