import React from "react";
import { useParams } from "react-router-dom";
import style from "./ProjectDetails.module.css";
import { useNavigate } from "react-router-dom";

export default function ProjectDetails({ projects }) {
    const { projectId } = useParams();
    const project = projects.find((p) => p._id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    const navigate = useNavigate()
    const backToHome = () => {
        navigate('/home')
      }

    return (
        <div className={style.detailsContainer}>
            <h2>{project.name}</h2>
            <img src={project.images} alt={project.name} />
            <h5>{project.category}</h5>
            <button onClick={backToHome} className='backToHome'>BACK TO HOME</button>
        </div>
    );
}
