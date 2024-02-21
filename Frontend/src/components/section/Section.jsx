import React, { useState } from 'react'
import style from './Section.module.css'
import { Support } from '../questions/support/Support'
import { AmountVisites } from '../questions/amountVisites/AmountVisites'
import { Purpose } from '../questions/purpose/Purpose'
import { ExtraServices } from '../questions/extraServices/ExtraServices'
import { ExtraRequeriments } from '../questions/extraRequeriments/ExtraRequeriments'
import { Desing } from '../questions/desing/Desing'
import { ApiOrDatabase } from '../questions/apiOrDatabase/ApiOrDatabase'
import { AmountOfProducts } from '../questions/amountOfProducts/AmountOfProducts'
import { LegalNorm } from '../questions/legalNorm/LegalNorm'
import { Language } from '../questions/language/Language'
import { ResumeQuestions } from '../resumeQuestions/ResumeQuestions'
import BarProgress from './barProgress/BarProgress'
import Pricing from '../pricing/Pricing'
import { IoHomeOutline } from "react-icons/io5";


export const Section = ({ quote, setQuote }) => {

  const [question, setQuestion] = useState(1)
  const [progressBar, setProgressBar] = useState(0)

  const array = Object.keys(quote)


  const switchQuestion = (question) => {

    switch (question) {
      case 1:
        return <Purpose progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />;
      case 2:
        return <ApiOrDatabase progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 3:
        if (quote.purpose === "ecommerce") {
          return <AmountOfProducts progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
        } else {
          setQuestion(question + 1)
        }
      case 4:
        return <ExtraServices progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 5:
        return <LegalNorm progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 6:
        return <AmountVisites progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />;
      case 7:
        return <Language progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 8:
        return <Desing progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 9:
        return <Support progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 10:
        return <ExtraRequeriments progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 11:
        return <ResumeQuestions progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 12:
        return <Pricing progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} />
      default:
        return <></>

    }
  }


  return (
    <div className={style.containerSection}>
      <div className={style.LogoAndButton}>
        <img src="./images/LogoResumen.png" alt="" />
        <button><IoHomeOutline/></button>
      </div>
      <div className={style.container}>
        <div className={style.ContainerQuestions}>
          <div className={style.Question}>
          {
            array.map((pregunta, index) => (
                  <span key={index}>{pregunta}</span>
            ))
          }
          </div>
        </div>
        <div className={style.containerQuoteAndBar}>
          <div className={style.containerBar}>
            <BarProgress progressBar={progressBar} />
          </div>
          <div className={style.containerQuote}>
            {
              switchQuestion(question)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
