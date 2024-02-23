import React from 'react'
import style from './Language.module.css'
import { useTranslation } from 'react-i18next'

<<<<<<< HEAD
export const Language = ({ quote, setQuote, question, setQuestion, progressBar, setProgressBar  }) => {
=======
export const Language = ({ quote, setQuote, question, setQuestion }) => {
  const [t, i18n] = useTranslation("global");
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'language': valueClick
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }
  return (
    <div className={style.containerLanguage}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section7.title")}</h3>
      </div>
      <div className={style.containerButtons}>
        <button
          className={style.button}
          value={t("QuoteQuestions.Section7.answer1")}
          onClick={handleClick}
        >{t("QuoteQuestions.Section7.answer1")}</button>

        <button
          className={style.button}
          value={t("QuoteQuestions.Section7.answer2")}
          onClick={handleClick}
        >{t("QuoteQuestions.Section7.answer2")}</button>

        <button
          className={style.button}
          value={t("QuoteQuestions.Section7.answer3")}
          onClick={handleClick}
        >{t("QuoteQuestions.Section7.answer3")}</button>
      </div>
    </div>
  )
}
