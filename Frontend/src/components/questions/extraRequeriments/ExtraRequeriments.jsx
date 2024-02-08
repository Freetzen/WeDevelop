import React, { useState } from 'react'

export const ExtraRequeriments = ({quote, setQuote, question, setQuestion}) => {

  const [requeriment, setRequeriment] = useState('')

  const handleChange = (event) => {
    setRequeriment(event.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setRequeriment(e.target.value)
    setQuote({
      ...quote,
      'extraRequeriments': e.target.value
    })
    setQuestion(question + 1)
  }

  return (
    <div>
      <h2>Tu página tiene algun requisito no contemplado dentro de nuestra ruta de preguntas?</h2>
      <div>
        <button
          value='no'
          onClick={handleClick}
        >
          No
        </button>
      </div>


      <div>
      <input
        value={requeriment}
        type='text'
        placeholder='Especifique cuales son los requisitos'
        onChange={handleChange}
      ></input>
        <button
          onClick={handleClick}
        >
        Guardar cambios
        </button>
      </div>
    </div>
  );
}
