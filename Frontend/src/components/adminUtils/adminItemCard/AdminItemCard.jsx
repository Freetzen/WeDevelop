import React from 'react';
import style from './AdminItemCard.module.css'
import { NavLink } from 'react-router-dom';
export default function AdminItemCard(props) {

    return (
        <NavLink to={`/admin/${props.id}`}>
            <div className={style.card} >
                {
                    props.email
                        ? (
                            <div>
                                <h3>{props.name}</h3>
                                <br />
                                <h4>{props.email}</h4>
                                <br />
                                <h4>Status: {props.suspended ? 'No Activo' : 'Activo'}</h4>
                            </div>
                        )
                        : (
                            <div>
                                <img src={props.images ? props.images : null} alt="" />
                                <h4>{props.name}</h4>
                                <h4>{props.category}</h4>
                            </div>
                        )
                }
            </div>
        </NavLink>

    )
}