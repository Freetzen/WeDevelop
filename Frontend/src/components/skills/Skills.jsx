import style from "./Skills.module.css";


const Skills = () => {

  const skills = ["Experience", "Creativity", "Attention to detail", "Professional", "Unique desings", "Efficiency"]

  return (
    <div>
      <h1 className={style.title}>Why choose us?</h1>
      <div className={style.skillContainer}>
        {skills.map(skill => <div className={style.skill}>{skill}</div>)}
        
      </div>
    </div>
  )
}

export default Skills