import React from 'react'
import style from './Purpose.module.css'


export const Purpose = ({ quote, setQuote, question, setQuestion, setProgressBar, progressBar }) => {

  const handleClick = (e) => {

    

    const valueClick = e.target.value
    setQuote({
      ...quote,
      'purpose': valueClick
    })

    if (valueClick === 'web') {
      setProgressBar(progressBar + 20)
      setQuestion(question + 1)
    } else {
      setProgressBar(progressBar + 10)
      setQuestion(question + 1)

    }


  }

  return (
    <div className={style.containerPurpose}>
      <div className={style.titleCuestion}>
        <h3>What will be the purpose of your project?</h3>
      </div>
      <div className={style.containerButtons}>
        <button
          className={style.button}
          value="ecommerce"
          onClick={handleClick}
        >E-commerce</button>
        <button
          className={style.button}
          value="web"
          onClick={handleClick}
        >Web</button>
      </div>
    </div>
  );
}
