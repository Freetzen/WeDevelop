import { Link } from "react-router-dom";
import style from "./ProjectsCard.module.css";


export default function ProjectsCard({project}) {
    return (

        <Link to={`/projects/${project._id}`} className={style.link}>
            <div className={style.container}>
            <img src={project.images} className={style.img}/>
            <div className={style.containerTitle}>
                <h2>{project.name}</h2>
                <h5> Categoria: {project.category}</h5>
            </div>
            </div>
        </Link>
        
    )
}