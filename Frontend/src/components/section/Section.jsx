import React, { useState } from 'react'
import { Support } from '../questions/support/Support'
import { AmountVisites } from '../questions/amountVisites/AmountVisites'
import { Purpose } from '../questions/purpose/Purpose'
import { AmountPage } from '../questions/amountPage/AmountPage'
import { ExtraServices } from '../questions/extraServices/ExtraServices'
import { ExtraRequeriments } from '../questions/extraRequeriments/ExtraRequeriments'
import { Desing } from '../questions/Desing/Desing'
import { ApiOrDatabase } from '../questions/apiOrDatabase/ApiOrDatabase'
import { AmountOfProducts } from '../questions/amountOfProducts/amountOfProducts'
import { LegalNorm } from '../questions/legalNorm/LegalNorm'
import { Language } from '../questions/language/Language'


export const Section = ({website, setWebsite, ecommerce, setEcommerce}) => {

  const [question, setQuestion] = useState(1)

  const switchQuestion = (question) => {

    switch (question) {
    case 1:
      return <Purpose website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question}/>;
    case 2:
    return <AmountVisites website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question} />;
    case 3:
      return <AmountPage website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question} />
    case 4:
      return <LegalNorm website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question} />
    case 5:
      return <Language website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question} />
    case 6:
      return <ExtraServices website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question} />
    case 7:
      return <ExtraRequeriments website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question} />
    case 8:
      return <Desing website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question} />
    case 9:
      return <ApiOrDatabase website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question} />
    case 10:
      return <Support website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question} />
    case 11:
      return <AmountOfProducts website={website} setWebsite={setWebsite} setQuestion={setQuestion} question={question} />
    default:
      return <></>
    }
  }
  

  return (
    <div>
      
      {
      switchQuestion(question)
      }

      <button
      onClick={() =>{setQuestion(question + 1)}}>Otra pregunta</button>
    </div>
  )
}
