import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import userProvider from "../../utils/provider/userProvider/userProvider";
import style from './LoginButton.module.css'
import SpinnerLogin from "../spinners/spinnerLogin/SpinnerLogin";
import { UserAccount } from "../../pages/userAccount/UserAccount";
import Swal from 'sweetalert2'

const LoginButton = () => {

  const navigate = useNavigate
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const postUserData = async () => {
    try {
      const newUser = {
        name: user.name,
        email: user.email,
        image: user.picture
      }
      const textodeejemplo = await userProvider.getUserByEmail(user.email)

      if(textodeejemplo.banned){
        
        Swal.fire({
          icon: "error",
          title: "You are Banned from our page.",
          text: "Contact us.",
          footer: `<a href="https://wedevelop.vercel.app/contact">Why do I have this issue?</a>`
        });
        setTimeout(() => {
          logout()
        }, 6000);

     return 
        
      }
      if(!textodeejemplo) { 
        await userProvider.createUser(newUser)}
    } catch (error) {
      console.error('Error al enviar los datos del usuario al servidor:', error);
    }
  };

  isAuthenticated && user && postUserData();

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (isAuthenticated && user) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [])
  
  const [menuIsActive, setMenuIsActive] = useState(true)

  const activeMenu = () => {
    setMenuIsActive(!menuIsActive)
  }


  return (
    <div className={style.containerLogin}>
      {!isAuthenticated ? (
        <button className={style.buttonLogin} onClick={() => loginWithRedirect()}>LogIn</button>
      ) : (
        <>
        <UserAccount menuIsActive={menuIsActive} activeMenu={activeMenu}/>
        <div className={style.containerButtonUser} >
          <div className={style.containerSpinner} style={loading ? {display: ''} : {display: 'none'}} >
            <SpinnerLogin />
          </div>
          <div className={style.containerNameAndButton} style={loading ? {display: 'none'} : {display: ''}}>
            <button onClick={activeMenu}>
              {user.name}
            </button>
            <img src={user.picture} alt=""></img>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default LoginButton;