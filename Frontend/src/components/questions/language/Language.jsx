import React from 'react'

export const Language = ({quote, setQuote, question, setQuestion}) => {

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'language': valueClick
    })
    setQuestion(question + 1)
  }
  return (
    <div>

      <h2>¿Cuantos idiomas necesitas que admita tu sitio web?</h2>

      <div>
      <button
        value="Solo un idioma"
        onClick={handleClick}
      >Solo un idioma</button>


      <button
        value="Bilingual"
        onClick={handleClick}
      >Bilingual</button>

      <button
        value="Multilingue"
        onClick={handleClick}
      >Multilingue</button>
      </div>
    </div>
  )
}
