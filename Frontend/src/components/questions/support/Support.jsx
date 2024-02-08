import React, { useState } from 'react';
import style from './Support.module.css'
import service from './servicios-digitales.png';
import no from './no.png';
import si from './si.png';

export const Support = () => {

  const [showOptions, setShowOptions] = useState(false);

  const handleYesClick = () => {
    setShowOptions(true);
  };
  const handleNoClick = () => {
    setShowOptions(false);
  };

  return (
    <div className={style.container}>
      <h1>Su web requerirá de soporte?</h1>
      <div className={style.imageContainer} onClick={handleYesClick}>
        <img src={service} alt="servicios" className={style.image} />
        <div>
          <img src={si} alt="sí" className={style.smallImage} />
        </div>
      </div>
      <div className={style.imageContainer} onClick={handleNoClick}>
        <img src={service} alt="servicios" className={style.image} />
        <div>
          <img src={no} alt="sí" className={style.smallImage} />
        </div>
      </div>
      {showOptions && (
        <div>
          <h2>Opciones de soporte</h2>
          <ul  className={style['options-list']}>
            <li className={style['option-item']}>Semanal</li>
            <li className={style['option-item']}>Mensual</li>
            <li className={style['option-item']}>Trimestral</li>
            <li className={style['option-item']}>Otros</li>
          </ul>
        </div>
      )}
      </div>
  );
};
