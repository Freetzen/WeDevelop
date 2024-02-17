import ProjectsCard from "../../components/projectsCard/ProjectsCard";
import style from "./Projects.module.css";
import projectsProvider from "../../utils/provider/projectsProvider/projectsProvider";
import { useEffect, useState } from "react";
import PaginateProyect from "../../components/paginateProject/PaginateProyect";
import Select from 'react-select';

export default function Projects() {

  const [selectedOptions, setSelectedOptions] = useState([])
  const [projects, setProjects] = useState([])
  const [totalInfo, setTotalInfo] = useState([])

  const categoriesMain = [
    "E-commerce",
    "Tourism",
    "Health",
    "Landing Page",
    "Social Network",
    "Portfolio",
    "Entertainment",
  ];

  useEffect(() => {
    if (!selectedOptions.length) dataInit()
    else bringData()
  }, [selectedOptions])

  const dataInit = async (page = 1) => {
    const totalProjects = await projectsProvider.getProjects(page);
    setProjects(totalProjects.docs)
    const { docs, ...info } = totalProjects;
    setTotalInfo(info)
  }

  const bringData = async (page = 1) => {
    const valuesArray = selectedOptions.map(option => option.value);
    const response = await projectsProvider.getProjectByCategory({ categories: valuesArray, page: page });
    setProjects(response.docs)
    const { docs, ...info } = response;
    setTotalInfo(info)
  }

  const formattedOptions = categoriesMain.map(option => ({
    value: option,
    label: option,
    category: option
  }));
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  return (
    <div className={style.projectsContainer}>
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={formattedOptions}
      />

      <div className={style.proyectos}>
        {
          projects.map((proyecto, index) => <ProjectsCard key={index} project={proyecto} />)
        }
      </div>

      <div>
        <PaginateProyect bringData={bringData} dataInit={dataInit} totalInfo={totalInfo} selectedOptions={selectedOptions} />
      </div>

    </div>
  )
}
