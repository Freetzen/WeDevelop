import React, { useState } from 'react'
import style from "./ApiOrDatabase.module.css"

export const ApiOrDatabase = ({ quote, setQuote, question, setQuestion, setProgressBar, progressBar }) => {

const [apiOrDatabase, setApiOrDatabase] = useState("")


  const handleChange = (event) => {
    setApiOrDatabase(event.target.value)
  }
  
  const handleClick = (event) => {
    setProgressBar(progressBar + 10)
    const valueClick = event.target.value
    if(apiOrDatabase === ""){
      setQuote({
        ...quote,
        'apiOrDatabase': valueClick
      })
      setQuestion(question + 1)
    }else{
      setQuote({
        ...quote,
        'apiOrDatabase': apiOrDatabase
      })
      setQuestion(question + 1)
    }

    
  }

  return (
    <div className={style.containerApiOrDatabase}>
      <div className={style.titleCuestion}>
        <h3>Will your site consume any API or external database?</h3>
      </div>
      <div className={style.apiOrDatabaseContainer}>
        <div className={style.ApiOrDatabaseOpcionOne}>
          <button
            className={style.button}
            value="No"
            onClick={handleClick}
          >No</button>
        </div>
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
            onClick={handleClick}
          >Save</button>
        </div>
      </div>
    </div>
  );
}
