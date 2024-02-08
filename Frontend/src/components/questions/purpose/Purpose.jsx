import React from 'react'


export const Purpose = ({ quote, setQuote, question, setQuestion }) => {

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'purpose': valueClick
    })
    setQuestion(question + 1)
  }

  return (
    <div>
      <button
        value="ecommerce"
        onClick={handleClick}
      >Ecommerce</button>

      <button
        value="web"
        onClick={handleClick}
      >Web</button>
    </div>
  );
}
