import React, { useState } from 'react'
import styles from './ExtraServices.module.css'

export const ExtraServices = ({ quote, setQuote, question, setQuestion }) => {
  const [platform, setPlatform] = useState('')
  const [positiveAnswer, setPosAnswer] = useState(false)

  const handleChange = (event) => {
    setPlatform(event.target.value)
  }

  const handleClick = (e) => {
    const valueClick = e.target.value
    if (valueClick === 'Si') setPosAnswer(true)
    else {
      setQuote({
        ...quote,
        'extraServices': valueClick
      })
      setQuestion(question + 1)
    }
  }

  const handleClickContinue = (e) => {
    e.preventDefault()
    setQuote({
      ...quote,
      'extraServices': platform
    })
    setQuestion(question + 1)
  }

  const handleClickGoBack = () => {
    quote.purpose === 'ecommerce'
      ? setQuestion(question - 1)
      : setQuestion(question - 2)
  }

  return (
    <div className={styles.containerExtraServices}>

      <div className={styles.titleCuestion}>
        <h3>¿Requiere integración con plataformas externas o servicios, como redes sociales o sistemas de pago en línea?</h3>
      </div>
      
      <div className={styles.containerButtons}>
        <button className={styles.button} value="Si" onClick={handleClick}>Si</button>

        <button className={styles.button} value="No" onClick={handleClick}>No</button>

        <button className={styles.button} onClick={handleClickGoBack}>Pregunta anterior</button>
      </div>
      <br />
      {/* A continuacion aparece el index si la respuesta es positiva */}
      {positiveAnswer ? (
        <div className={styles.TrueExtraServiceContainer}>
          <label>¿Cuales?</label>
          <br />
          <input
            name='platform'
            type="text"
            placeholder='ingrese aqui las plataformas'
            value={platform}
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
