import React from 'react'

export const AmountOfProducts = ({quote, setQuote, question, setQuestion}) => {

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'amountOfProducts': valueClick
    })
    setQuestion(question + 1)
  }

  return (
    <div>
      <h3>¿Cantidad estimada de productos a publicar?</h3>

      <button 
        value="menos de 10"
        onClick={handleClick}
      >Menos de 10</button>

      <button
        value="de 10 a 20"
        onClick={handleClick}
      >De 10 a 20</button>

      <button
        value="más de 20"
        onClick={handleClick}
      >Más de 20</button>
    </div>
  )
}
