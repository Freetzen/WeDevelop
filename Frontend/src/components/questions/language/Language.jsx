import React from 'react'
import style from './Language.module.css'

export const Language = ({ quote, setQuote, question, setQuestion, progressBar, setProgressBar  }) => {

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
        <h3>How many languages do you need your website to support?</h3>
      </div>
      <div className={style.containerButtons}>
        <button
          className={style.button}
          value="One language"
          onClick={handleClick}
        >One language</button>

        <button
          className={style.button}
          value="Bilingual"
          onClick={handleClick}
        >Bilingual</button>

        <button
          className={style.button}
          value="Multilingual"
          onClick={handleClick}
        >Multilingual</button>
      </div>
    </div>
  )
}
