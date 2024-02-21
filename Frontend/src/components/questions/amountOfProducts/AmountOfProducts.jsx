import React from 'react'
import style from './AmountOfProducts.module.css'

export const AmountOfProducts = ({ quote, setQuote, question, setQuestion,  setProgressBar, progressBar  }) => {

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'amountOfProducts': valueClick
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }

  return (
    <div className={style.containerAmountOfProductse}>
      <div className={style.titleCuestion}>
        <h3>Estimated number of products to publish?</h3>
      </div>
      <div className={style.containerButtons}>
        <button
        className={style.button}
          value="under 10"
          onClick={handleClick}
        >Under 10</button>

        <button
        className={style.button}
          value="10 to 20"
          onClick={handleClick}
        >10 to 20</button>

        <button
        className={style.button}
          value="Over 20"
          onClick={handleClick}
        >Over 20</button>
      </div>
    </div>
  )
}
