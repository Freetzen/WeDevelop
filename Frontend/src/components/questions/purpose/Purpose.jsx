import React from 'react'
import style from './Purpose.module.css'


export const Purpose = ({ quote, setQuote, question, setQuestion }) => {

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'purpose': valueClick
    })
    setQuestion(question + 1)
  }

  return (
    <div className={style.containerPurpose}>
      <div className={style.titleCuestion}>
        <h3>¿Que finalidad tendra su proyecto?</h3>
      </div>
      <div className={style.containerButtons}>
        <button
          className={style.button}
          value="ecommerce"
          onClick={handleClick}
        >Ecommerce</button>
        <button
          className={style.button}
          value="web"
          onClick={handleClick}
        >Web</button>
      </div>
    </div>
  );
}
