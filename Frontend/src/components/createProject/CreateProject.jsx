import { useState } from "react";
import projectsProvider from "../../utils/provider/projectsProvider/projectsProvider";

const CreateProject = () => {

const [project, setproject] = useState({
  name: "",
  images: "",
  description: "",
  category: "",
});

const category = [
  "",
  "E-commerce",
  "Tourism",
  "Health",
  "Landing Page",
  "Social Network",
  "Portfolio",
  "Entertainment",
];

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const newProject = await projectsProvider.postProjects(project);
    setproject({
      name: "",
      images: "",
      description: "",
      category: category[0],
    });
    return newProject;
  } catch (error) {
    return error.message;
  }
};

const handleChange = (e) => {
  const input = e.target.value;
  setproject({
    ...project,
    [e.target.name]: input,
  });
};

const handleCategory = (e) => {
  setproject({
    ...project,
    category: e.target.value,
  });
};

const handleImage = async (e) => {
  const imgFile = e.target.files[0];
  console.log(project);

  try {
    const { data } = await projectsProvider.uploadImg(imgFile);
    setproject({
      ...project,
      images: data.url,
    });
  } catch (error) {}
};


  return (
    <div style={{ paddingTop: "150px" }}>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
        />

        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={project.description}
          onChange={handleChange}
        />

        <label>Category: </label>
        <select name="category" onChange={handleCategory}>
          {category.map((e) => {
            return (
              <option value={e} key={e}>
                {e}
              </option>
            );
          })}
        </select>

        <label>File: </label>
        <input type="file" name="image" onChange={handleImage}/>

        <button type="submit" /* disabled={!proyect.name && !proyect.category && !proyect.images && !proyect.description} */>Send</button>
      </form>
    </div>
  );
}

export default CreateProject