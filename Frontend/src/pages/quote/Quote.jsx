import { useState } from "react";
import { Section } from "../../components/section/Section";

export const Quote = () => {

  const [quote, setQuote] = useState({
    purpose: '',
    apiOrDatabase: null,
    amountOfProducts: null,
    extraServices: null,
    legalNorm: null,
    amountOfVisits: null,
    lenguage: null,
    design: null,
    support: null,
    extraRequeriments: null,
  })

  return (
    <>
      <Section quote={quote} setQuote={setQuote} />
    </>
  )
}
