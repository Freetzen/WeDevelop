import React, { useState } from 'react';
import style from './Support.module.css'
import YesSuppor from './SupportWebYes.png';
import NoSupport from './SupportWebNo.png';
import { FcCancel } from "react-icons/fc";
import { FcOk } from "react-icons/fc";

export const Support = ({ quote, setQuote, question, setQuestion }) => {

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
    <div className={style.containerSupport}>
      <div className={style.titleCuestion}>
        <h3>¿Su web requerira soporte?</h3>
      </div>

      <div className={style.containerImages}>
        <div className={style.imageContainer} onClick={handleYesClick}>
          <img src={YesSuppor} alt="servicios" className={style.image} />
          <div className={style.containerIcon}>
            <FcOk className={style.smallImage} />
          </div>
          <div className={style.title}>
            <h4>Requires Support</h4>
          </div>
        </div>
        <div className={style.imageContainer} onClick={handleClick}>
          <img src={NoSupport} alt="servicios" className={style.image} />
          <div className={style.containerIcon}>
            <FcCancel className={style.smallImage} />
          </div>
          <div className={style.title}>
            <h4>No Support Required</h4>
          </div>
        </div>
      </div>
      {showOptions && (
        <div className={style.containerOptions}>
          <h2>Opciones de soporte</h2>
          <div className={style['options-list']}>
            <button className={style['option-item']} onClick={handleClick}>Semanal</button>
            <button className={style['option-item']} onClick={handleClick}>Mensual</button>
            <button className={style['option-item']} onClick={handleClick}>Trimestral</button>
            <button className={style['option-item']} onClick={handleClick}>Otros</button>
          </div>
        </div>
      )}
    </div>
  );
};
