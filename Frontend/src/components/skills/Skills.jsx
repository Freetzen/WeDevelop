import style from "./Skills.module.css";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FcConferenceCall } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";


const Skills = () => {

  const skills = ["Experience", "Creativity", "Attention to detail", "Professional", "Original designs", "Efficiency"]

  return (
    <div className={style.containerSkills}>
      <div className={style.containerTitle}>
        <h1 className={style.title}>Why WebDevelop?</h1>
      </div>
      <div className={style.containerCards}>
        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcConferenceCall style={{color : '6940ff'}}/>
          </div>
          <div className={style.titleCard}>
            <h4>Experience</h4>
            <p>Con experiencia en creación de páginas web, destacamos en diseño, programación y optimización. Nuestro enfoque centrado en el usuario y conocimientos actualizados garantizan sitios web eficientes y estéticos</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcIdea />
          </div>
          <div className={style.titleCard}>
            <h4>Creativity</h4>
            <p>Fusionamos ideas innovadoras para dar vida a proyectos únicos. Nuestra habilidad en el arte de la creatividad se refleja en diseños originales y soluciones imaginativas que superan las expectativas, añadiendo un toque distintivo a cada creación.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcVoicePresentation/>
          </div>
          <div className={style.titleCard}>
            <h4>Attention to detail</h4>
            <p>Cada proyecto es cuidadosamente supervisado para garantizar precisión y calidad. Nuestra dedicación se refleja en resultados impecables, donde cada elemento está finamente ajustado para brindar la máxima excelencia.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcApproval />
          </div>
          <div className={style.titleCard}>
            <h4>Professional</h4>
            <p>Elevamos el estándar de profesionalismo en cada tarea que emprendemos. Con enfoque riguroso, integridad y experiencia sólida, ofrecemos servicios excepcionales. Nuestra dedicación a la excelencia y ética profesional se traduce en resultados satisfactorios.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcTemplate />
          </div>
          <div className={style.titleCard}>
            <h4>Unique desings</h4>
            <p>Creamos diseños únicos que cautivan y destacan. Nuestra pasión por la originalidad se refleja en cada proyecto, fusionando innovación estética para ofrecer soluciones visualmente impactantes y con una impresión duradera.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcBullish />
          </div>
          <div className={style.titleCard}>
            <h4>Efficiency</h4>
            <p>Priorizamos la eficiencia en cada fase de nuestro trabajo. Desde la planificación hasta la ejecución, nuestros procesos optimizados garantizan resultados rápidos y precisos, entregando proyectos de alta calidad en tiempo récord.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills