import React from 'react'
import style from './Language.module.css'

export const Language = ({ quote, setQuote, question, setQuestion }) => {

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'language': valueClick
    })
    setQuestion(question + 1)
  }
  return (
    <div className={style.containerLanguage}>
      <div className={style.titleCuestion}>
        <h3>¿Cuantos idiomas necesitas que admita tu sitio web?</h3>
      </div>
      <div className={style.containerButtons}>
        <button
          className={style.button}
          value="Solo un idioma"
          onClick={handleClick}
        >Solo un idioma</button>

        <button
          className={style.button}
          value="Bilingual"
          onClick={handleClick}
        >Bilingual</button>

        <button
          className={style.button}
          value="Multilingue"
          onClick={handleClick}
        >Multilingue</button>
      </div>
    </div>
  )
}
