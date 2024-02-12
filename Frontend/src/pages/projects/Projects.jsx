import ProjectsCard from "../../components/projectsCard/ProjectsCard";
import style from "./Projects.module.css";
import projectsProvider from "../../utils/provider/projectsProvider/projectsProvider";
import { useEffect, useState } from "react";

export default function Projects() {


  const [projects, setProjects] = useState([])

  useEffect(() =>{
    const getUs = async () => {
      const totalProjects = await projectsProvider.getProyects();
      setProjects(totalProjects)

    }
    getUs()
  }, []);

  console.log(projects);

  return(
    <div className={style.projectsContainer}>
        <div>
          <h3>Proyectos creados</h3>
        </div>
       <div className={style.proyectos}>
          {  projects.map((proyecto, index) => (
              <ProjectsCard key={index} project={proyecto} />
          )
          )}
      </div>
    </div>
  )
}
