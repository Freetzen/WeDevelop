import React, { useState } from 'react'
import styles from './LegalNorm.module.css'

export const LegalNorm = ({ quote, setQuote, question, setQuestion }) => {
  const [requirements, setRequirements] = useState('')
  const [positiveAnswer, setPosAnswer] = useState(false)

  const handleChange = (e) => {
    setRequirements(e.target.value)
  }

  const handleClick = (e) => {
    const valueClick = e.target.value
    if (valueClick === 'Yes') setPosAnswer(true)
    else {
      setQuote({
        ...quote,
        'legalNorm': valueClick
      })
      setQuestion(question + 1)
    }
  }

  const handleClickContinue = (e) => {
    e.preventDefault()
    setQuote({
      ...quote,
      'legalNorm': requirements
    })
    setQuestion(question + 1)
  }

  const handleClickGoBack = () => {
    setQuestion(question - 1)
  }

  return (
    <div className={styles.containerLegalNorm}>
      <div className={styles.titleCuestion}>
        <h3>Are there any specific legal requirements or regulations that must be met in the development of your website?</h3>
      </div>

      <div className={styles.containerButtons}>
        <button className={styles.button} value="Yes" onClick={handleClick}>Yes</button>

        <button className={styles.button} value="No" onClick={handleClick}>No</button>

        <button className={styles.button} onClick={handleClickGoBack}>Previous question</button>
      </div>
      <br />

      {/* A continuacion aparece el index si la respuesta es positiva */}
      {positiveAnswer ? (
        <div className={styles.TrueLegalNorm}>
          <label>Which ones?</label>
          <br />
          <input
            name='requirements'
            type="text"
            placeholder='enter the requirements here'
            value={requirements}
            onChange={handleChange}
          />
          <br />
          <button
            onClick={handleClickContinue}
          >
            Continue
          </button>
        </div>
      ) : (<></>)}
    </div>
  )
}
