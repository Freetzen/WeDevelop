import ProjectsCard from "../../components/projectsCard/ProjectsCard";
import style from "./Projects.module.css";
import projectsProvider from "../../utils/provider/projectsProvider/projectsProvider";
import { useEffect, useState } from "react";
import PaginateProyect from "../../components/paginateProject/PaginateProyect";

export default function Projects() {


  const [projects, setProjects] = useState([])
  const [categories, setcategories] = useState([])
  const [info, setInfo] = useState([]);

  useEffect(() =>{
    const getUs = async () => {
      const totalProjects = await projectsProvider.getProjects();
      setProjects(totalProjects.docs);

      const {
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage,
        page,
        pagingCounter,
        prevPage,
        totalDocs,
        totalPages,
      } = totalProjects;

      setInfo({
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage,
        page,
        pagingCounter,
        prevPage,
        totalDocs,
        totalPages,
      });
    };
    getUs();
  }, []);

  const category = [
    'Reiniciar Filtros',
    "E-commerce",
    "Tourism",
    "Health",
    "Landing Page",
    "Social Network",
    "Portfolio",
    "Entertainment",
  ];

  const handleClick = async(e) => {
    e.preventDefault()
    const category = await projectsProvider.getProjectByCategory(e.target.value)
    if(category === '') setcategories(projects)
    setcategories(category)
}

  return(
    <div className={style.projectsContainer}>
        <div>
          <h3>Proyectos creados</h3>

          <select name="filter" onChange={handleClick}>
            {
              category.map((e, index) => (<option key={index} value={e}>{e}</option>))
              }
          </select>
        </div>
       <div className={style.proyectos}>
          {  
          categories.length === 0 
          ? projects.map((proyecto, index) => (<ProjectsCard key={index} project={proyecto} />)) 
          : categories.map((proyecto, index) => (<ProjectsCard key={index} project={proyecto} />))
          }
      </div>

      <div>
          <PaginateProyect info={info} projects={projects} setProjects={setProjects} setInfo={setInfo} />
      </div>
    </div>
  )
}
