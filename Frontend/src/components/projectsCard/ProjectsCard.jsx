import { Link } from "react-router-dom";
import style from "./ProjectsCard.module.css";


export default function ProjectsCard({project}) {
    return (

        <Link to={`/projects/${project._id}`}>
            <div className={style.container}>
                <h2>{project.name}</h2>
                <img src={project.images} />
                <h5>{project.category}</h5>
            </div>
        </Link>
        
    )
}