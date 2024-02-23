import React, { useState } from 'react'
import style from "./ApiOrDatabase.module.css"

export const ApiOrDatabase = ({ quote, setQuote, question, setQuestion, setProgressBar, progressBar }) => {

  const [apiOrDatabase, setApiOrDatabase] = useState("")
  const [positiveAnswer, setPosAnswer] = useState(false)


  const handleChange = (event) => {
    setApiOrDatabase(event.target.value)
  }

  const handleClick = (e) => {
    const valueClick = e.target.value
    if (valueClick === 'Yes') setPosAnswer(true)
    else {
      setQuote({
        ...quote,
        'apiOrDatabase': valueClick
      })
      setQuestion(question + 1)
      setProgressBar(progressBar + 10)
    }
  }

  const handleClickContinue = (e) => {
  
    e.preventDefault()
    setQuote({
      ...quote,
      'apiOrDatabase': apiOrDatabase
    })
    setQuestion(question + 1)
    setProgressBar(progressBar + 10)
  }


  return (
    <div className={style.containerApiOrDatabase}>
      <div className={style.titleCuestion}>
        <h3>Will your site consume any API or external database?</h3>
      </div>
      <div className={style.apiOrDatabaseContainer} >
        <div className={style.ApiOrDatabaseOpcionOne} style={positiveAnswer ? {display: 'none'} : {display: ''}}>
          <button
            className={style.button}
            value="Yes"
            onClick={handleClick}
          >Yes</button>

          <button
            className={style.button}
            value="No"
            onClick={handleClick}
          >No</button>
        </div>
        {positiveAnswer ? (
          <div className={style.ApiOrDatabaseOpcionTwo}>
            <input
              value={apiOrDatabase}
              type='text'
              placeholder='Specify your api or database to use'
              onChange={handleChange}
              className={style.ApiOrDatabaseInput}
            ></input>
              <button
                className={style.ApiOrDatabaseUpload}
                onClick={handleClickContinue}
              >Save</button>
            <button
              className={style.ApiOrDatabaseUpload}
              onClick={() => setPosAnswer(false)}
            >Cancelar</button>
          </div>
        ) : (<></>)}
      </div>
    </div>
  );
}
