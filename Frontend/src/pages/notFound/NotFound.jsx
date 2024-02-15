import React from 'react'
import style from './NotFound.module.css'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/quote');
      };

    return (
        <div className={style.notFound}>
        
        <div className={style.img}>
            <img src= "./images/404NotFound.png" />
        </div>
        
        <h1>404 - Page Not Found</h1>
        <p>
        You might be here because:
        <br />
        • The page has moved
        <br />
        • The page no longer exists
        <br />
        You were looking for your kittens and got lost
        <br />
        • You like 404 pages
        <br />
        <br />
        Dont cry! just click the button below to fix it
      </p>
      <br />
      <button className={style.button} onClick={handleClick}>Secure zone</button>
        </div>
    )
}

export default NotFound