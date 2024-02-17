import { useAuth0 } from "@auth0/auth0-react"
import style from "./UserAccount.module.css"
import { useEffect, useState } from "react";
import userProvider from "../../utils/provider/userProvider/userProvider";


export const UserAccount = ({menuIsActive, activeMenu}) => {
  const { user, logout } = useAuth0()
  let fecha = user.updated_at.split("")
  let res = fecha.slice(0, 10)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { user } = await userProvider.getUserByEmail(user.email);
      } catch (error) {
      }
    }
    fetchData();
  }, [])


  return (
    <div className={style.infoContainer} style={menuIsActive ? {left: '-20%'} : {left: '0%'}}>
      <div className={style.imgAndNameContainer}>
        <img src={user?.picture}></img>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
      <div className={style.planAndMembershipContainer}>
        <label >Membership</label>
        <p>Premium</p>
        <label >Fecha de creacion de la cuenta</label>
        <p> {res}</p>
      </div>
      <div className={style.buttonsContainer}>
        <button onClick={() => logout()}>Sign Out</button>
      </div>
    </div>
  )
}
