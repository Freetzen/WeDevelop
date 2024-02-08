import React from 'react'

export const AmountVisites = ({quote, setQuote, question, setQuestion}) => {

 const handleClick = (e) => {
  const valueClick = e.target.value
    setQuote({
      ...quote,
      'amountVisites': valueClick
 })
  setQuestion(question + 1)
 }
  return (
    <div>

      <h2>¿cuantas visitas estima que tendra su pagina? </h2>
    
      <div>
      <button
        value="5 a 10 visitas por mes"
        onClick={handleClick}
      >5 a 10 visitas por mes</button>

      <button
        value="10 a 20 visitas por mes"
        onClick={handleClick}
        >10 a 20 visitas por mes</button>

      <button
        value="20 o mas visitas por mes"
        onClick={handleClick}
        >20 o mas visitas por mes</button>
      </div>
    </div>
  )
}
