import ProjectsCard from "../../components/projectsCard/ProjectsCard";
import style from "./Projects.module.css";
import projectsProvider from "../../utils/provider/projectsProvider/projectsProvider";
import { useEffect, useState } from "react";
import PaginateProyect from "../../components/paginateProject/PaginateProyect";

export default function Projects() {


  const [projects, setProjects] = useState([])
  const [categories, setcategories] = useState([])
  const [filters, setFilters] = useState([])
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
    'Restart Filters',
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
    const filter = e.target.value;
    const response = await projectsProvider.getProjectByCategory(filter)
    if(response === '' || filter === 'Restart Filters') {
      setcategories(projects)
      setFilters([])
    }else{
      setcategories(response)
      setFilters((prevFilters) => [...prevFilters, filter])
    }
    // if(response){
    //   if(!categories){
    //     setcategories(response)
    //     setFilters((prevFilters) => [...prevFilters, filter])
    //   }else{
    //     setcategories((prevCategories)=>[...prevCategories,response])
    //     setFilters((prevFilters) => [...prevFilters, filter])
    //   }
    // }
  }
  const filteredProjects = categories.length ? categories : projects;

  return(
    <div className={style.projectsContainer}>
        <div className={style.filtersContainer}>
          <select name="filter" onChange={handleClick}>
            {
              category.map((e, index) => (<option key={index} value={e}>{e}</option>))
              }
          </select>
          <h3>selected categories</h3>
          <ol>

          { 
           filters.length ? filters.map((e,index)=>(<li key={index}>{e}</li>)) : null
          }
          </ol>
        </div>
        <div className={style.proyectos}>
          {  
           filteredProjects.map((proyecto, index) => (<ProjectsCard key={index} project={proyecto} />)) 
          }
      </div>

      <div>
          <PaginateProyect info={info} projects={projects} setProjects={setProjects} setInfo={setInfo} />
      </div>
    </div>
  )
}
