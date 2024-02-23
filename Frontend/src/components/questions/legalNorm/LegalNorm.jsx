import React, { useState } from 'react'
import styles from './LegalNorm.module.css'
import { useTranslation } from 'react-i18next';

<<<<<<< HEAD
export const LegalNorm = ({ quote, setQuote, question, setQuestion, setProgressBar, progressBar }) => {
=======
export const LegalNorm = ({ quote, setQuote, question, setQuestion }) => {
  const [t, i18n] = useTranslation("global");
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16
  const [requirements, setRequirements] = useState('')
  const [positiveAnswer, setPosAnswer] = useState(false)

  const handleChange = (e) => {
    setRequirements(e.target.value)
  }

  const handleClick = (e) => {
    const valueClick = e.target.value
    if (valueClick === 'Yes' || valueClick === 'Si') setPosAnswer(true)
    else {
      setQuote({
        ...quote,
        'legalNorm': valueClick
      })
      setQuestion(question + 1)
      setProgressBar(progressBar + 10)
    }
  }

  const handleClickContinue = (e) => {
    e.preventDefault()
    setQuote({
      ...quote,
      'legalNorm': requirements
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }

  return (
    <div className={styles.containerLegalNorm}>
      <div className={styles.titleCuestion}>
        <h3>{t("QuoteQuestions.Section5.title")}</h3>
      </div>

<<<<<<< HEAD
      <div className={styles.containerButtons} style={positiveAnswer ? {display: 'none'} : {display: ''}}>
        <button className={styles.button} value="Yes" onClick={handleClick}>Yes</button>

        <button className={styles.button} value="No" onClick={handleClick}>No</button>

=======
      <div className={styles.containerButtons}>
        <button className={styles.button} value={t("QuoteQuestions.Section5.answer1")} onClick={handleClick}>{t("QuoteQuestions.Section5.answer1")}</button>

        <button className={styles.button} value="No" onClick={handleClick}>No</button>

        <button className={styles.button} onClick={handleClickGoBack}>{t("QuoteQuestions.Section5.answer3")}</button>
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16
      </div>

      {/* A continuacion aparece el index si la respuesta es positiva */}
      {positiveAnswer ? (
        <div className={styles.TrueLegalNorm}>
<<<<<<< HEAD
          <input
            name='requirements'
            type="text"
            placeholder='Enter the requirements here'
=======
          <label>{t("QuoteQuestions.Section5.whichOne.title")}:</label>
          <br />
          <input
            name='requirements'
            type="text"
            placeholder={t("QuoteQuestions.Section5.whichOne.input")}
>>>>>>> b30b935a0e21b3a70bb09c926cdb46cae8e28a16
            value={requirements}
            onChange={handleChange}
          />
          <button
            onClick={handleClickContinue}
          >
            {t("QuoteQuestions.Section5.whichOne.save")}
          </button>
          <button
              onClick={() => setPosAnswer(false)}
            >Cancelar</button>
        </div>
      ) : (<></>)}
    </div>
  )
}
