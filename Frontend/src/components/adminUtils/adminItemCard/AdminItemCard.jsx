import React from 'react';
import style from './AdminItemCard.module.css'
import { NavLink } from 'react-router-dom';
import userProvider from '../../../utils/provider/userProvider/userProvider';
import projectsProvider from '../../../utils/provider/projectsProvider/projectsProvider';
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
                            <div>
                                <h3>Name: {props.name}</h3>
                                <br />
                                <h4>Email: {props.email}</h4>
                                <br />
                                <h4>Status: {props.suspended ? 'Disabled' : 'Active'}</h4>
                            </div>
                        )
                        : (
                            <div>
                                <img src={props.images ? props.images : null} alt="" />
                                <h4>Name: {props.name}</h4>
                                <h4>Category: {props.category}</h4>
                            </div>
                        )
                }
            </div>
        </NavLink>

    )
}