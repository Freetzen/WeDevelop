import React from 'react';
import style from './AdminItemCard.module.css'
export default function AdminItemCard(props) {

    return (
        <div className={style.card}>
            <h3>Nombre: {props.name}</h3>
            <h4>Correo: {props.email}</h4>
        </div>

    )
}