import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./DetailProyects.module.css";
import { useNavigate } from "react-router-dom";
import projectsProvider from "../../utils/provider/projectsProvider/projectsProvider";

export default function ProjectDetails() {
    const { id } = useParams();

    const [projectById, setProjectById] = useState([])

  const getProject = async () => {
    try {
      const totalProjects = await projectsProvider.getProjectById(id)
    setProjectById(totalProjects)
    console.log(projectById)
    } catch (error) {
      console.log(error.message)
    }

  }

  useEffect(() =>{
    getProject()
  }, [])

    if (!id) {
        return <div>Project not found</div>;
    }

    const navigate = useNavigate()
    const backToHome = () => {
        navigate('/projects')
      }

    return (
        <div className={style.detailsContainer}>
            <h2>{projectById.name}</h2>
            <img src={projectById.images} alt={projectById.name} />
            <p>{projectById.description}</p>
            <h5>{projectById.category}</h5>
            <button onClick={backToHome} className='backToHome'>BACK TO HOME</button>
        </div>
    );
}
