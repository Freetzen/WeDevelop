import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './SearchBarAdmin.module.css'
import validator from 'validator'
import userProvider from '../../../utils/provider/userProvider/userProvider';


export default function SearchBarAdmin({ setItemsToEdit, itemsToEdit }) {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setName(value)
    }
    // const handleClick=()=>{

    // }
    const handleClick = () => {
        if (name === '') return window.alert('Debes ingresar un nombre')
        if (validator.isEmail(name)) getUsEmail(name)
        else {
            setItemsToEdit([])
            window.alert('Ahora debemos hacer el de pryectos')
        }
        console.log('Este es el items', itemsToEdit);
        setName('')
    }
    const getUs = async () => {
        setItemsToEdit([])
        const usersResponse = await userProvider.getUsers()
        setItemsToEdit(usersResponse)
    }
    const getUsEmail = async (email) => {
        setItemsToEdit([])
        // if (name === '') return window.alert('Debes ingresar un nombre')
        const usersResponse = await userProvider.getUserByEmail(email)
        console.log(' esta es la userresponse', usersResponse);
        if (usersResponse === null) {
            return window.alert('No existen coincidencias con el nombre proporcionado')
        }
        else setItemsToEdit([...itemsToEdit, usersResponse])
        console.log('Este es el items en get', itemsToEdit);
    }
    return (
        <div className={style.searBar}>
            <div className={style.buttons1}>
                <button
                    onClick={getUs}
                >Usuarios</button>
                <button>Proyectos</button>
            </div>

            <div className={style.buttons2}>
                <NavLink to={'/createProject'}>
                    <button>Crear Proyecto</button>
                </NavLink>
                <NavLink to={'/createUser'}>
                    <button>Crear Usuario</button>
                </NavLink>
            </div>

            <div className={style.buttons3}>
                <label >Buscar :  </label>
                <input
                    type="text"
                    name='search'
                    value={name}
                    placeholder='Ingrese email o proyecto'
                    onChange={handleChange}
                />

                <button onClick={() => { handleClick() }}
                >Buscar</button>
            </div>
        </div>
    )
}