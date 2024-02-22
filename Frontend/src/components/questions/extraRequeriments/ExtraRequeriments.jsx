import React, { useState } from 'react'
import style from "./ExtraRequeriments.module.css"
import { useTranslation } from 'react-i18next';

export const ExtraRequeriments = ({ quote, setQuote, question, setQuestion }) => {
  const [t, i18n] = useTranslation("global");

  const [requeriment, setRequeriment] = useState('')

  const handleChange = (event) => {
    setRequeriment(event.target.value)
  }

  const handleClick = (event) => {
    const valueClick = event.target.value
    if(requeriment === ""){
      setQuote({
        ...quote,
        'extraRequeriments': valueClick
      })
      setQuestion(question + 1)
    }else{
      setQuote({
        ...quote,
        'extraRequeriments': requeriment
      })
      setQuestion(question + 1)
    }
  }

  return (
    <div className={style.containerExtraRequeriments}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section10.title")}</h3>
      </div>
      <div className={style.ExtraRequerimentsContainer}>
        <div className={style.ExtraRequerimentsOpcionOne}>
          <button
            className={style.button}
            value="No"
            onClick={handleClick}
          >No</button>
        </div>
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
      </div>
    </div>
  );
}
