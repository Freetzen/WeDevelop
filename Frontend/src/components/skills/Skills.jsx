import style from "./Skills.module.css";


const Skills = () => {

  const skills = ["Experience", "Creativity", "Attention to detail", "Professional", "Original designs", "Efficiency"]

  return (
    <div>
      <h1 className={style.title}>Why choose us?</h1>
      <div className={style.skillContainer}>
        {skills.map((skill, index) => <div className={style.skill} key={index}>{skill}<p>Nuestra experiencia en el diseño de páginas web es el resultado de un viaje apasionante y enriquecedor que ha sido impulsado por tu dedicación, creatividad y búsqueda constante de la excelencia.</p></div>)}
        
      </div>
    </div>
  )
}

export default Skills