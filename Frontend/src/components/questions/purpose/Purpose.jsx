import React from 'react'
import style from './Purpose.module.css'
import { useTranslation } from 'react-i18next';


export const Purpose = ({ quote, setQuote, question, setQuestion }) => {
  const [t, i18n] = useTranslation("global");

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'purpose': valueClick
    })
    setQuestion(question + 1)
  }

  return (
    <div className={style.containerPurpose}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section1")}</h3>
      </div>
      <div className={style.containerButtons}>
        <button
          className={style.button}
          value="ecommerce"
          onClick={handleClick}
        >E-commerce</button>
        <button
          className={style.button}
          value="web"
          onClick={handleClick}
        >Web</button>
      </div>
    </div>
  );
}
