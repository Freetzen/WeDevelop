import React from 'react'
import style from './AmountVisites.module.css'

export const AmountVisites = ({ quote, setQuote, question, setQuestion, progressBar, setProgressBar }) => {

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'amountOfVisits': valueClick
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }


  return (
    <div className={style.containerAmountVisites}>
      <div className={style.titleCuestion}>
        <h3>How many visits do you estimate your site will have?</h3>
      </div>

      <div className={style.containerButtons}>
        <button
          className={style.button}
          value="5 to 10 visits per month"
          onClick={handleClick}
        >5 to 10 visits per month</button>

        <button
          className={style.button}
          value="10 to 20 visits per month"
          onClick={handleClick}
        >10 to 20 visits per month</button>

        <button
          className={style.button}
          value="20 or more visits per month"
          onClick={handleClick}
        >20 or more visits per month</button>
      </div>
    </div>
  )
}
