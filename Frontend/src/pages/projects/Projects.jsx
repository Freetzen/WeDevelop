import ProjectsCard from "../../components/projectsCard/ProjectsCard";
import style from "./Projects.module.css";
import proyectsProvider from "../../utils/provider/proyectsProvider/proyectsProvider";
import { useEffect, useState } from "react";

export default function Projects() {


  const [projects, setProjects] = useState([])

  useEffect(() =>{
    const getUs = async () => {
      const totalProjects = await proyectsProvider.getProyects();
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
