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
    if (valueClick === 'Si') setPosAnswer(true)
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
    <div className={styles.legalnorm}>
      <button
        onClick={handleClickGoBack}
      >
        Pregunta anterior
      </button>
      <h3>
        ¿Existen requisitos legales o normativas específicas que deban cumplirse en el desarrollo de su sitio web?
      </h3>

      <button
        value="Si"
        onClick={handleClick}
      >Si</button>

      <button
        value="No"
        onClick={handleClick}
      >No</button>
      <br />

      {/* A continuacion aparece el index si la respuesta es positiva */}
      {positiveAnswer ? (
        <div>
          <label>¿Cuales?</label>
          <br />
          <input
            name='requirements'
            type="text"
            placeholder='ingrese aqui los requisitos'
            value={requirements}
            onChange={handleChange}
          />
          <br />
          <button
            onClick={handleClickContinue}
          >
            Continuar
          </button>
        </div>
      ) : (<></>)}
    </div>
  )
}
