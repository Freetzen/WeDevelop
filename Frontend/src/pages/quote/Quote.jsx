import { useState } from "react";
import { Section } from "../../components/section/Section";

export const Quote = () => {

  const [quote, setQuote] = useState({
    purpose:'',
    amountOfProducts: null,
    amountOfVisits: null,
    apiOrDatabase: null,
    design: null,
    extraRequeriments: null,
    extraServices: null,
    lenguage: null,
    legalNorm: null,
    support: null,
  })
  
  return (  
    <>
    <Section quote={quote} setQuote={setQuote}/>
    </>
  )
}
