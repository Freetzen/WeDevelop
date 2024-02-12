import React, { useState } from 'react'
import style from "./ApiOrDatabase.module.css"

export const ApiOrDatabase = ({ quote, setQuote, question, setQuestion }) => {

const [apiOrDatabase, setApiOrDatabase] = useState("")


  const handleChange = (event) => {
    setApiOrDatabase(event.target.value)
  }
  
  const handleClick = (event) => {
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
        <h3>¿Su página consumira alguna API o base de datos externa?</h3>
      </div>
      <div className={style.apiOrDatabaseContainer}>
        <div className={style.ApiOrDatabaseOpcionOne}>
          <button
            className={style.button}
            value="no"
            onClick={handleClick}
          >No</button>
        </div>
        <div className={style.ApiOrDatabaseOpcionTwo}>
          <input
            value={apiOrDatabase}
            type='text'
            placeholder='Especifique su api o base de datos a usar'
            onChange={handleChange}
            className={style.ApiOrDatabaseInput}
          ></input>
          <button
            className={style.ApiOrDatabaseUpload}
            onClick={handleClick}
          >Guardar cambios</button>
        </div>
      </div>
    </div>
  );
}
