import { useState } from "react";
import proyectsProvider from "../../utils/provider/proyectsProvider/proyectsProvider";

const CreateProyect = () => {

const [proyect, setProyect] = useState({
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
    const newProyect = await proyectsProvider.postProyects(proyect);
    setProyect({
      name: "",
      images: "",
      description: "",
      category: category[0],
    });
    return newProyect;
  } catch (error) {
    return error.message;
  }
};

const handleChange = (e) => {
  const input = e.target.value;
  setProyect({
    ...proyect,
    [e.target.name]: input,
  });
};

const handleCategory = (e) => {
  setProyect({
    ...proyect,
    category: e.target.value,
  });
};

const handleImage = async (e) => {
  const imgFile = e.target.files[0];
  console.log(proyect);

  try {
    const { data } = await proyectsProvider.uploadImg(imgFile);
    setProyect({
      ...proyect,
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
          value={proyect.name}
          onChange={handleChange}
        />

        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={proyect.description}
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

export default CreateProyect