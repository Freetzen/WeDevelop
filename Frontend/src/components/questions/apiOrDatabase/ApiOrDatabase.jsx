import React, { useState } from 'react'
import style from "./ApiOrDatabase.module.css"

export const ApiOrDatabase = ({quote, setQuote, question, setQuestion}) => {

const [apiOrDatabase, setApiOrDatabase] = useState("no")

const handleChange = (event) => {
  setApiOrDatabase(event.target.value)
}
const handleClick = (event) => {
  event.preventDefault();
  setApiOrDatabase(event.target.value)
    setQuote({
      ...quote,
      'apiOrDatabase': apiOrDatabase
    })  
  setQuestion(question + 1)
}

return (<>
    <h2 
    className={style.ApiOrDatabaseTitle}
    >¿su página consumira alguna API o base de datos externa?</h2>
  <div className={style.apiOrDatabaseContainer}>
  <br className={style.ApiOrDatabaseBr} />
    <div className={style.ApiOrDatabaseOpcionOne}>
      <button 
        value="no"
        onClick={handleClick}
      >No</button>
    </div>
  <hr/>
    <div className={style.ApiOrDatabaseOpcionTwo}>
      <h2
      className={style.ApiOrDatabaseH2}
      >especifique su API o base de datos a usar</h2>
      <input
        value={apiOrDatabase}
        type='text'
        placeholder='especifique su api o base de datos a usar'
        onChange={handleChange}
        className={style.ApiOrDatabaseInput}
      ></input>
      <button 
      className={style.ApiOrDatabaseUpload}
      onClick={handleClick}
      >guardar cambios</button>
      </div>

  </div>
      
      </>
);
}
