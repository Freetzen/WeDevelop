import React, { useState } from 'react'
import { Support } from '../questions/support/Support'
import { AmountVisites } from '../questions/amountVisites/AmountVisites'
import { Purpose } from '../questions/purpose/Purpose'
import { ExtraServices } from '../questions/extraServices/ExtraServices'
import { ExtraRequeriments } from '../questions/extraRequeriments/ExtraRequeriments'
import { Desing } from '../questions/Desing/Desing'
import { ApiOrDatabase } from '../questions/apiOrDatabase/ApiOrDatabase'
import { AmountOfProducts } from '../questions/amountOfProducts/amountOfProducts'
import { LegalNorm } from '../questions/legalNorm/LegalNorm'
import { Language } from '../questions/language/Language'
import { ResumeQuestions } from '../resumeQuestions/ResumeQuestions'


export const Section = ({quote, setQuote}) => {

  const [question, setQuestion] = useState(1)
  

  const switchQuestion = (question) => {

    switch (question) {
    case 1:
      return <Purpose quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question}/>;
    case 2:
      return <ApiOrDatabase quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
    case 3:
      if(quote.purpose === "ecommerce"){
        return <AmountOfProducts quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      }else{
        setQuestion(question + 1)
      }
    case 4:
      return <ExtraServices quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
    case 5:
      return <LegalNorm quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
    case 6:
      return <AmountVisites quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />;
    case 7:
      return <Language quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
    case 8:
      return <Desing quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
    case 9:
      return <Support quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
    case 10:
      return <ExtraRequeriments quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
    case 11:
      return <ResumeQuestions quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
    default:
      return <></>
    }
  }
  

  return (
    <div>
      
      {
      switchQuestion(question)
      }
      {question !== 1 && ( 
      <button
        onClick={() => {setQuestion(question - 1)}}>Anterior pregunta</button>
    )}
      <button
      onClick={() =>{setQuestion(question + 1)}}>Siguiente pregunta</button>
    </div>
  )
}
