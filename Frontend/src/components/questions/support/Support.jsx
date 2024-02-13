import React, { useState } from 'react';
import style from './Support.module.css'
import YesSuppor from './SupportWebYes.png';
import NoSupport from './SupportWebNo.png';
import { FcCancel } from "react-icons/fc";
import { FcOk } from "react-icons/fc";

export const Support = ({ quote, setQuote, question, setQuestion }) => {

  const [showOptions, setShowOptions] = useState(false);
  const [selectedSupport, setSelectedSupport] = useState(null); 
  const handleYesClick = () => {
    setShowOptions(true);
  };

  const handleClick = (e) => {
    const valueClick = e.target.value;
   
      setSelectedSupport(valueClick); 
      setQuote({
        ...quote,
        'support': valueClick
      });
      setShowOptions(false);
      setQuestion(question + 1);
    
    console.log(valueClick);
  };

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
        <div className={style.imageContainer} >
          <img src={NoSupport} alt="servicios" className={style.image} />
          <div className={style.containerIcon}>
            <FcCancel className={style.smallImage}/>
          </div>
          <div className={style.title} onClick={handleClick} >
            <h4>No Support Required</h4>
          </div>
        </div>
      </div>
      {showOptions && (
        <div className={style.containerOptions}>
          <h2>Opciones de soporte</h2>
          <div className={style['options-list']}>
            <button className={style['option-item']} onClick={handleClick} value='Semanal'>Semanal</button>
            <button className={style['option-item']} onClick={handleClick} value='Mensual'>Mensual</button>
            <button className={style['option-item']} onClick={handleClick} value='Trimestral'>Trimestral</button>
            <button className={style['option-item']} onClick={handleClick} value='Otros'>Otros</button>
          </div>
        </div>
      )}
    </div>
  );
};
