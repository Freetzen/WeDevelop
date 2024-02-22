import React, { useState } from 'react'
import style from "./ApiOrDatabase.module.css"
import { useTranslation } from "react-i18next";

export const ApiOrDatabase = ({ quote, setQuote, question, setQuestion }) => {
  const [t, i18n] = useTranslation("global");

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
        <h3>{t("QuoteQuestions.Section2.title")}</h3>
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
            placeholder={t("QuoteQuestions.Section2.input")}
            onChange={handleChange}
            className={style.ApiOrDatabaseInput}
          ></input>
          <button
            className={style.ApiOrDatabaseUpload}
            onClick={handleClick}
          >{t("QuoteQuestions.Section2.save")}</button>
        </div>
      </div>
    </div>
  );
}
