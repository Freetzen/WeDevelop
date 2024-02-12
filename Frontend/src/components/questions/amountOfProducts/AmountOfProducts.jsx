import React from 'react'
import style from './AmountOfProducts.module.css'

export const AmountOfProducts = ({ quote, setQuote, question, setQuestion }) => {

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'amountOfProducts': valueClick
    })
    setQuestion(question + 1)
  }

  return (
    <div className={style.containerAmountOfProductse}>
      <div className={style.titleCuestion}>
        <h3>¿Cantidad estimada de productos a publicar?</h3>
      </div>
      <div className={style.containerButtons}>
        <button
        className={style.button}
          value="menos de 10"
          onClick={handleClick}
        >Menos de 10</button>

        <button
        className={style.button}
          value="de 10 a 20"
          onClick={handleClick}
        >De 10 a 20</button>

        <button
        className={style.button}
          value="más de 20"
          onClick={handleClick}
        >Más de 20</button>
      </div>
    </div>
  )
}
