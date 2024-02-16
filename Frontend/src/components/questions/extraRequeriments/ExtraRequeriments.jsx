import React, { useState } from 'react'
import style from "./ExtraRequeriments.module.css"

export const ExtraRequeriments = ({ quote, setQuote, question, setQuestion }) => {

  const [requeriment, setRequeriment] = useState('')

  const handleChange = (event) => {
    setRequeriment(event.target.value)
  }


  const handleClick = (event) => {
    const valueClick = event.target.value
    if(requeriment === ""){
      setQuote({
        ...quote,
        'extraRequeriments': valueClick
      })
      setQuestion(question + 1)
    }else{
      setQuote({
        ...quote,
        'extraRequeriments': requeriment
      })
      setQuestion(question + 1)
    }
  }

  return (
    <div className={style.containerExtraRequeriments}>
      <div className={style.titleCuestion}>
        <h3>Does your site have any requirements not covered by our question routing?</h3>
      </div>
      <div className={style.ExtraRequerimentsContainer}>
        <div className={style.ExtraRequerimentsOpcionOne}>
          <button
            className={style.button}
            value="No"
            onClick={handleClick}
          >No</button>
        </div>
        <div className={style.ExtraRequerimentsTwo}>
          <textarea
          placeholder='Specify the requirements here'
            value={requeriment}
            type='text'
            onChange={handleChange}
            className={style.ExtraRequerimentsTextArea}
          ></textarea>
          <button
            className={style.ExtraRequerimentsUpload}
            onClick={handleClick}
          >Continue</button>
        </div>
      </div>
    </div>
  );
}
