import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import userProvider from "../../utils/provider/userProvider/userProvider";
import style from './LoginButton.module.css'
import SpinnerLogin from "../spinners/spinnerLogin/SpinnerLogin";
import { UserAccount } from "../../pages/userAccount/UserAccount";
import Swal from 'sweetalert2'
import { useTranslation } from "react-i18next";
import { clearLocalStorage, userDate } from "../../helpers/local";



const LoginButton = () => {
  const dta = useSelector(state => state.userData)

  const [t, i18n] = useTranslation("global");
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const postUserData = async () => {
    try {
      const newUser = {
        name: user.name,
        email: user.email,
        image: user.picture
      }
      userDate('info', newUser)
      const textodeejemplo = await userProvider.getUserByEmail(user.email)

      if(!textodeejemplo) { 
       const newUser1 = await userProvider.createUser(newUser)
       return newUser1
      }
      if(textodeejemplo.banned){
        
        Swal.fire({
          icon: "error",
          title: t("LoginButton.bannedAlert"),
          text: t("LoginButton.bannedAlertContact"),
          footer: `<a href="https://wedevelop.vercel.app/contact">${t("LoginButton.bannedWhy")}</a>`
        });
        setTimeout(() => {
          logout()
        }, 6000);
        clearLocalStorage()
     return 
        
      }

    } catch (error) {
      console.error('Error al enviar los datos del usuario al servidor:', error);
    }
  };

  isAuthenticated && user && postUserData();

  const [loading, setLoading] = useState(false);

  useEffect(() => {

   /*  const newUser = {
      name: user.name,
      email: user.email,
      image: user.picture
    }
    userDate('info', newUser) */
    if (isAuthenticated && user) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [])

  const handleLogin = () => {
    loginWithRedirect() 
 }
  
  const [menuIsActive, setMenuIsActive] = useState(true)

  const activeMenu = () => {
    setMenuIsActive(!menuIsActive)
  }


  return (
    <div className={style.containerLogin}>
      {!dta.email ? (
        <button className={style.buttonLogin} onClick={handleLogin}>{t("LoginButton.title")}</button>
      ) : (
        <>
        <UserAccount menuIsActive={menuIsActive} activeMenu={activeMenu}/>
        <div className={style.containerButtonUser} >
          <div className={style.containerSpinner} style={loading ? {display: ''} : {display: 'none'}} >
            <SpinnerLogin />
          </div>
          <div className={style.containerNameAndButton} style={loading ? {display: 'none'} : {display: ''}}>
            <button onClick={activeMenu}>
              {dta.name}
            </button>
            <img src={dta.image} alt=""></img>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default LoginButton;