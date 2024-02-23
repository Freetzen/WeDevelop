import React, { useState } from 'react';
<<<<<<< HEAD
import style from "./Desing.module.css";
import { GoStarFill } from "react-icons/go";
import projects from './Projects'

export const Desing = ({ quote, setQuote, question, setQuestion, progressBar, setProgressBar }) => {
=======
import styles from "./Desing.module.css";
import { ImSad } from "react-icons/im";
import { FaRegSmileWink } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export const Desing = ({ quote, setQuote, question, setQuestion }) => {
  const [t, i18n] = useTranslation("global");
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16


  const handleClick = (title) => {
    setQuote({
      ...quote,
      'desing': title
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }

  // Captura el valor del textArea

  const [valorTextarea, setValorTextarea] = useState('');

  const capturarValor = () => {
    setQuote({
      ...quote,
      'desing': valorTextarea
    })
    setQuestion(question + 1)
  }

  return (
<<<<<<< HEAD
    <div className={style.containerDesing}>
      <div className={style.titleCuestion}>
        <h3>Select a Template</h3>
=======
    <div className={styles.containerDesing}>
      <div className={styles.titleCuestion}>
        <h3>{t("QuoteQuestions.Section8.title")}</h3>
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16
      </div>
      <div className={style.ContainerTemplate}>
        <div className={style.containerCards} >
          {projects.map((project, index) => (
            <div className={style.boxCard} key={index} onClick={() => handleClick(project.title)}>
              <div className={style.containerImage}>
                <img src={project.url} alt="" />
              </div>
              <div className={style.containerResumen} >
                <h4>{project.title}</h4>
                <span> ★ ★ ★ ★ ★ </span>
              </div>
            </div>
          ))}
        </div>
        <div className={style.containerTextArea}>
          <h4>Don't like any template?</h4>
          <textarea
            onChange={(e) => setValorTextarea(e.target.value)}
            name={valorTextarea}
            id=""
            cols="30"
            rows="10"
            placeholder='Write your ideas here'
          ></textarea>
          <button onClick={capturarValor}>Continue</button>
        </div>
      </div>
<<<<<<< HEAD
=======
      <h4>{t("QuoteQuestions.Section8.subtitle")} <ImSad /></h4>
      <textarea
        onChange={(e) => setValorTextarea(e.target.value)}
        name={valorTextarea}
        id=""
        cols="30"
        rows="10"
        placeholder={t("QuoteQuestions.Section8.input")}
      ></textarea>
      <button onClick={capturarValor}>{t("QuoteQuestions.Section8.continue")}</button>
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16
    </div>
  )

}




