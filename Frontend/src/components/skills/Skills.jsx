import style from "./Skills.module.css";
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
        <h1 className={style.title}>Why WeDevelop?</h1>
      </div>
      <div className={style.containerCards}>
        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcConferenceCall style={{color : '6940ff'}}/>
          </div>
          <div className={style.titleCard}>
            <h4>Experience</h4>
            <p>With experience in website creation, we excel in design, programming and optimization. Our user-centered approach and up-to-date knowledge ensure efficient and aesthetically pleasing websites.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcIdea />
          </div>
          <div className={style.titleCard}>
            <h4>Creativity</h4>
            <p>We fuse innovative ideas to bring unique projects to life. Our skill in the art of creativity is reflected in original designs and imaginative solutions that exceed expectations, adding a distinctive touch to each creation.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcVoicePresentation/>
          </div>
          <div className={style.titleCard}>
            <h4>Attention to detail</h4>
            <p>Each project is carefully supervised to ensure precision and quality. Our dedication is reflected in impeccable results, where every element is finely tuned to provide the utmost excellence.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcApproval />
          </div>
          <div className={style.titleCard}>
            <h4>Professional</h4>
            <p>We raise the standard of professionalism in every assignment we undertake. With rigorous focus, integrity and solid experience, we deliver exceptional services. Our dedication to excellence and professional ethics translates into satisfying results.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcTemplate />
          </div>
          <div className={style.titleCard}>
            <h4>Unique desings</h4>
            <p>We create unique designs that captivate and stand out. Our passion for originality is reflected in every project, fusing aesthetic innovation to deliver visually stunning solutions with a lasting impression.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcBullish />
          </div>
          <div className={style.titleCard}>
            <h4>Efficiency</h4>
            <p>We prioritize efficiency in every phase of our work. From planning to execution, our streamlined processes ensure fast and accurate results, delivering high quality projects in record time.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills