import React from 'react'
import style from './AmountVisites.module.css'

export const AmountVisites = ({ quote, setQuote, question, setQuestion }) => {

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'amountOfVisits': valueClick
    })
    setQuestion(question + 1)
  }


  return (
    <div className={style.containerAmountVisites}>
      <div className={style.titleCuestion}>
        <h3>¿Cuantas visitas estima que tendra su pagina?</h3>
      </div>

      <div className={style.containerButtons}>
        <button
          className={style.button}
          value="5 a 10 visitas por mes"
          onClick={handleClick}
        >5 a 10 visitas por mes</button>

        <button
          className={style.button}
          value="10 a 20 visitas por mes"
          onClick={handleClick}
        >10 a 20 visitas por mes</button>

        <button
          className={style.button}
          value="20 o mas visitas por mes"
          onClick={handleClick}
        >20 o mas visitas por mes</button>
      </div>
    </div>
  )
}
