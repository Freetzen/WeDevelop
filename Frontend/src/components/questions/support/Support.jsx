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
    const valueClick = e.currentTarget.getAttribute('value');
   
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
        <h3>Will your website require support?</h3>
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

        <div className={style.imageContainer} onClick={handleClick} value='No'>

          <img src={NoSupport} alt="Services" className={style.image} />
          <div className={style.containerIcon}>
            <FcCancel className={style.smallImage}/>
          </div>
          <div className={style.title}>
            <h4>No Support Required</h4>
          </div>
        </div>
      </div>
      {showOptions && (
        <div className={style.containerOptions}>
          <h2>Support options</h2>
          <div className={style['options-list']}>
            <button className={style['option-item']} onClick={handleClick} value='Weekly'>Weekly</button>
            <button className={style['option-item']} onClick={handleClick} value='Monthly'>Monthly</button>
            <button className={style['option-item']} onClick={handleClick} value='Quarterly'>Quarterly</button>
            <button className={style['option-item']} onClick={handleClick} value='Others'>Others</button>
          </div>
        </div>
      )}
    </div>
  );
};