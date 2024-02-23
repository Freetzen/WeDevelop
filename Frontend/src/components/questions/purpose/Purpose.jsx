import React from 'react'
import style from './Purpose.module.css'
import { useTranslation } from 'react-i18next';


<<<<<<< HEAD
export const Purpose = ({ quote, setQuote, question, setQuestion, setProgressBar, progressBar }) => {
=======
export const Purpose = ({ quote, setQuote, question, setQuestion }) => {
  const [t, i18n] = useTranslation("global");
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16

  const handleClick = (e) => {

    

    const valueClick = e.target.value
    setQuote({
      ...quote,
      'purpose': valueClick
    })

    if (valueClick === 'web') {
      setProgressBar(progressBar + 20)
      setQuestion(question + 1)
    } else {
      setProgressBar(progressBar + 10)
      setQuestion(question + 1)

    }


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
