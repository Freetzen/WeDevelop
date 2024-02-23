import React, { useState } from 'react'
import styles from './ExtraServices.module.css'

export const ExtraServices = ({ quote, setQuote, question, setQuestion, setProgressBar, progressBar }) => {
  const [platform, setPlatform] = useState('')
  const [positiveAnswer, setPosAnswer] = useState(false)

  const handleChange = (event) => {
    setPlatform(event.target.value)
  }

  const handleClick = (e) => {
    const valueClick = e.target.value
    if (valueClick === 'Yes') setPosAnswer(true)
    else {
      setQuote({
        ...quote,
        'extraServices': valueClick
      })
      setQuestion(question + 1)
      setProgressBar(progressBar + 10)
    }
  }

  const handleClickContinue = (e) => {
  
    e.preventDefault()
    setQuote({
      ...quote,
      'extraServices': platform
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }


  return (
    <div className={styles.containerExtraServices}>

      <div className={styles.titleCuestion}>
        <h3>Do you require integration with external platforms or services, such as social networks or online payment systems?</h3>
      </div>
      
      <div className={styles.containerButtons}  style={positiveAnswer ? {display: 'none'} : {display: ''}}>
        <button className={styles.button} value="Yes" onClick={handleClick}>Yes</button>

        <button className={styles.button} value="No" onClick={handleClick}>No</button>

      </div>
      {/* A continuacion aparece el index si la respuesta es positiva */}
      {positiveAnswer ? (
        <div className={styles.TrueExtraServiceContainer}>
          <input
            name='platform'
            type="text"
            placeholder='Enter the platforms here'
            value={platform}
            onChange={handleChange}
          />
          <button
            onClick={handleClickContinue}
          >
            Continue
          </button>
          <button
              onClick={() => setPosAnswer(false)}
            >Cancelar</button>
        </div>
      ) : (<></>)}
    </div>
  )
}
