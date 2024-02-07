import { useState } from "react";
import { Desing } from "../../components/questions/Desing/Desing";
import { AmountOfProducts } from "../../components/questions/amountOfProducts/amountOfProducts";
import { AmountPage } from "../../components/questions/amountPage/amountPage";
import { AmountVisites } from "../../components/questions/amountVisites/AmountVisites";
import { ApiOrDatabase } from "../../components/questions/apiOrDatabase/ApiOrDatabase";
import { ExtraRequeriments } from "../../components/questions/extraRequeriments/ExtraRequeriments";
import { ExtraServices } from "../../components/questions/extraServices/ExtraServices";
import { Languaje } from "../../components/questions/language/Languaje";
import { LegalNorm } from "../../components/questions/legalNorm/LegalNorm";
import { Purpose } from "../../components/questions/purpose/Purpose";
import { Support } from "../../components/questions/support/Support";
import { Section } from "../../components/section/Section";

export const Quote = (question) => {

  const [website, setWebsite] = useState({
    purpose:null,
    amountPage:null,
    amountVisites:null,
    amountOfProducts:null,
    apiOrDatabase:null,
    support:null,
    legalNorm:null,
    extraServices:null,
    extraRequeriments:null,
    languaje:null,
    desing:null
  })

  const handleQuoteChange = () =>{

  }

  const switchQuestion = (question) => {

    switch (question) {
    case "Purpose":
      return <Purpose onClick={handleQuoteChange} answer={setWebsite}/>;
    case "AmountVisites":
    return <AmountVisites onClick={handleQuoteChange} answer={setWebsite}/>;
    case "AmountPage":
      return <AmountPage onClick={handleQuoteChange} answer={setWebsite}/>
    case "LegalNorm":
      return <LegalNorm onClick={handleQuoteChange} answer={setWebsite}/>
    case "Languaje":
      return <Languaje onClick={handleQuoteChange} answer={setWebsite}/>
    case "ExtraServices":
      return <ExtraServices onClick={handleQuoteChange} answer={setWebsite}/>
    case "ExtraRequeriments":
      return <ExtraRequeriments onClick={handleQuoteChange} answer={setWebsite}/>
    case "Desing":
      return <Desing onClick={handleQuoteChange} answer={setWebsite}/>
    case "ApiOrDatabase":
      return <ApiOrDatabase onClick={handleQuoteChange} answer={setWebsite}/>
    case "Support":
      return <Support onClick={handleQuoteChange} answer={setWebsite}/>
    case "AmountOfProducts":
      return <AmountOfProducts onClick={handleQuoteChange} answer={setWebsite}/>
    default:
      return <></>
    }
  }
  return (
    <Section>
      {
        switchQuestion(question)
      }
    </Section>
  )
}
