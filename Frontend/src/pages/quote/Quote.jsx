import { useState } from "react";
import { Section } from "../../components/section/Section";

export const Quote = () => {

  const [quote, setQuote] = useState({
    purpose: '',
    apiOrDatabase: "no",
    amountOfProducts: null,
    extraServices: null,
    legalNorm: null,
    amountOfVisits: null,
    language: null,
    desing: null,
    support: null,
    extraRequeriments: null,
  })

  return (
    <>
      <Section quote={quote} setQuote={setQuote} />
    </>
  )
}
