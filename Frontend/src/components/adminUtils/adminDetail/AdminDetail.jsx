import React from 'react';
import style from './AdminDetail.module.css'
import userProvider from '../../../utils/provider/userProvider/userProvider';
export default function AdminDetail(props) {


    const getUs = async () => {
        const usersResponse = await userProvider.getUsers()
        setItemsToEdit(usersResponse)
    }
    
    return (

            <div className={style.card} >

                            <div>
                                <h3>nombre {props.name}</h3>
                                <br />
                                <h4> mail{props.email}</h4>
                                <br />
                                <h4>Status: {props.suspended ? 'No Activo' : 'Activo'}</h4>
                            </div>

                
            </div>


    )
}