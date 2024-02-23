import React from 'react'
import style from './AmountVisites.module.css'
import { useTranslation } from 'react-i18next'

<<<<<<< HEAD
export const AmountVisites = ({ quote, setQuote, question, setQuestion, progressBar, setProgressBar }) => {
=======
export const AmountVisites = ({ quote, setQuote, question, setQuestion }) => {
  const [t, i18n] = useTranslation("global");
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'amountOfVisits': valueClick
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }


  return (
    <div className={style.containerAmountVisites}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section6.title")}</h3>
      </div>

      <div className={style.containerButtons}>
        <button
          className={style.button}
          value={t("QuoteQuestions.Section6.answer1")}
          onClick={handleClick}
        >{t("QuoteQuestions.Section6.answer1")}</button>

        <button
          className={style.button}
          value={t("QuoteQuestions.Section6.answer2")}
          onClick={handleClick}
        >{t("QuoteQuestions.Section6.answer2")}</button>

        <button
          className={style.button}
          value={t("QuoteQuestions.Section6.answer3")}
          onClick={handleClick}
        >{t("QuoteQuestions.Section6.answer3")}</button>
      </div>
    </div>
  )
}
