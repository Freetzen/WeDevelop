import { useState } from "react";
import { Section } from "../../components/section/Section";

export const Quote = () => {

  const [website, setWebsite] = useState({
    purpose:'',
    //legalNorm: null
    extraServices: null, //Whats App
    lenguage: null,
    design: null,
  })

  const [ecommerce, setEcommerce] = useState({
    purpose:'',
    apiOrDatabase: null,
    amountOfProducts: null,
    extraServices: null,
    support: null,
    lenguage: null,
    design: null,
  })

  
  return (  
    <>
    <Section website={website} setWebsite={setWebsite} ecommerce={ecommerce} setEcommerce={setEcommerce}/>
    </>
  )
}
