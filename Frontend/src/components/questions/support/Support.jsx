import React, { useState } from 'react';
import style from './Support.module.css'
import service from './servicios-digitales.png';
import no from './no.png';
import si from './si.png';

export const Support = ({quote, setQuote, question, setQuestion}) => {

  const [showOptions, setShowOptions] = useState(false);

  const handleYesClick = () => {
    setShowOptions(true);
  };
 

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'support': valueClick
    })
    setShowOptions(false);
    setQuestion(question + 1)
  }


  return (
    <div className={style.container}>
      <h1>Su web requerirá de soporte?</h1>
      <div className={style.imageContainer} onClick={handleYesClick}>
        <img src={service} alt="servicios" className={style.image} />
        <div>
          <img src={si} alt="sí" className={style.smallImage} />
        </div>
      </div>
      <div className={style.imageContainer} onClick={handleClick}>
        <img src={service} alt="servicios" className={style.image} />
        <div>
          <img src={no} alt="sí" className={style.smallImage} />
        </div>
      </div>
      {showOptions && (
        <div>
          <h2>Opciones de soporte</h2>
          <ul  className={style['options-list']}>
            <li className={style['option-item']} onClick={handleClick}>Semanal</li>
            <li className={style['option-item']} onClick={handleClick}>Mensual</li>
            <li className={style['option-item']}onClick={handleClick}>Trimestral</li>
            <li className={style['option-item']}onClick={handleClick}>Otros</li>
          </ul>
        </div>
      )}
      </div>
  );
};
