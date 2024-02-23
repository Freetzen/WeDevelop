import React, { useState } from 'react'
import style from "./ExtraRequeriments.module.css"
import { useTranslation } from 'react-i18next';

<<<<<<< HEAD
export const ExtraRequeriments = ({ quote, setQuote, question, setQuestion, progressBar, setProgressBar }) => {
=======
export const ExtraRequeriments = ({ quote, setQuote, question, setQuestion }) => {
  const [t, i18n] = useTranslation("global");
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16

  const [requeriment, setRequeriment] = useState('')
  const [positiveAnswer, setPosAnswer] = useState(false)

  const handleChange = (event) => {
    setRequeriment(event.target.value)
  }


  const handleClick = (e) => {
    const valueClick = e.target.value
    if (valueClick === 'Yes') setPosAnswer(true)
    else {
      setQuote({
        ...quote,
        'extraRequeriments': valueClick
      })
      setQuestion(question + 1)
      setProgressBar(progressBar + 10)
    }
  }

  const handleClickContinue = (e) => {
    e.preventDefault()
    setQuote({
      ...quote,
      'extraRequeriments': requeriment
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }


  return (
    <div className={style.containerExtraRequeriments}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section10.title")}</h3>
      </div>
      <div className={style.ExtraRequerimentsContainer}>
        <div className={style.ExtraRequerimentsOpcionOne} style={positiveAnswer ? { display: 'none' } : { display: '' }}>
          <button
            className={style.button}
            value="Yes"
            onClick={handleClick}
          >Yes</button>
          <button
            className={style.button}
            value="No"
            onClick={handleClick}
          >No</button>
        </div>
<<<<<<< HEAD
        {positiveAnswer ? (
          <div className={style.ExtraRequerimentsTwo}>
            <textarea
              placeholder='Specify the requirements here'
              value={requeriment}
              type='text'
              onChange={handleChange}
              className={style.ExtraRequerimentsTextArea}
            ></textarea>
            <div className={style.coontainerButton}>
              <button
                className={style.ExtraRequerimentsUpload}
                onClick={handleClickContinue}
              >Send</button>
              <button
                onClick={() => setPosAnswer(false)}
              >Cancelar</button>
            </div>
          </div>

        ) : (<></>)}
=======
        <div className={style.ExtraRequerimentsTwo}>
          <textarea
          placeholder={t("QuoteQuestions.Section10.input")}
            value={requeriment}
            type='text'
            onChange={handleChange}
            className={style.ExtraRequerimentsTextArea}
          ></textarea>
          <button
            className={style.ExtraRequerimentsUpload}
            onClick={handleClick}
          >{t("QuoteQuestions.Section10.continue")}</button>
        </div>
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16
      </div>
    </div>
  );
}
