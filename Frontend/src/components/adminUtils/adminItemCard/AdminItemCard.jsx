import React from 'react';
import style from './AdminItemCard.module.css'
import { NavLink } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

export default function AdminItemCard(props) {

    const handleClick = async () => {
        if (props.email) props.setDetailState(props.email)
        else props.setDetailState(props.id)
    }

    return (
        <NavLink onClick={handleClick}>
            <div className={style.card} >
                {
                    props.email
                        ? (
                            <div className={style.containerInfo}>
                                <p>{props.name}</p>
                                <p className={style.email}>{props.email}</p>
                                <p className={style.isActive}style={props.suspended ? {color: 'red'} : {color: 'forestgreen'}}>{props.suspended ? <IoMdCloseCircle/> : <FaCheck/>}</p>
                            </div>
                        )
                        : (
                            <div className={style.containerInfo}>
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