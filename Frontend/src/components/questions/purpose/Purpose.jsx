import React from 'react'


export const Purpose = ({website, setWebsite, question, setQuestion}) => {

const handleClick = (e) => {
  const valueClick = e.target.value
  const nameClick = e.target.name
  setWebsite({
    ...website,
    'purpose': valueClick
  })
  setQuestion(Number(nameClick))
}

  return (
    <div>
      <button 
        value="ecommerce"
        onClick={handleClick}
        name={2}
      >Ecommerce</button>

      <button
        value="web"
        onClick={handleClick}
        name={7}
      >Web</button>
    </div>
  );
}
