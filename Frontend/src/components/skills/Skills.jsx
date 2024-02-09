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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum, repellendus ducimus quae dolor aspernatur facere dicta ratione recusandae voluptatibus quo iste nesciunt accusamus.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcIdea />
          </div>
          <div className={style.titleCard}>
            <h4>Creativity</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum, repellendus ducimus quae dolor aspernatur facere dicta ratione recusandae voluptatibus quo iste nesciunt accusamus.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcVoicePresentation/>
          </div>
          <div className={style.titleCard}>
            <h4>Attention to detail</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum, repellendus ducimus quae dolor aspernatur facere dicta ratione recusandae voluptatibus quo iste nesciunt accusamus.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcApproval />
          </div>
          <div className={style.titleCard}>
            <h4>Professional</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum, repellendus ducimus quae dolor aspernatur facere dicta ratione recusandae voluptatibus quo iste nesciunt accusamus.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcTemplate />
          </div>
          <div className={style.titleCard}>
            <h4>Unique desings</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum, repellendus ducimus quae dolor aspernatur facere dicta ratione recusandae voluptatibus quo iste nesciunt accusamus.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcBullish />
          </div>
          <div className={style.titleCard}>
            <h4>Efficiency</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum, repellendus ducimus quae dolor aspernatur facere dicta ratione recusandae voluptatibus quo iste nesciunt accusamus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills