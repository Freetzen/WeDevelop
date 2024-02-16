import { useAuth0 } from "@auth0/auth0-react"
import style from "./UserAccount.module.css"
import { useEffect, useState } from "react";
import userProvider from "../../utils/provider/userProvider/userProvider";
import { Link } from "react-router-dom";


export const UserAccount = () => {
    const { user, logout } = useAuth0()
    let fecha = user.updated_at.split("")
    let res = fecha.slice(0,10)

    useEffect(()=>{
      const fetchData = async () => {
      try {
        const {user} = await userProvider.getUserByEmail(user.email);
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData();
    },[])
    
  return (<>
        <Link to="/">
        <button>Home</button>
        </Link>
        <img src={user?.picture}></img>
        <h2>Nombre: {user?.name}</h2>
        <h2>Email: {user?.email}</h2>
        <h2>Plan/membresia:</h2>
        <h2>fecha de creacion de la cuenta: {res}</h2>
        <button onClick={() => logout()}>LogOut: {user.name}</button>

    </>
  )
}
