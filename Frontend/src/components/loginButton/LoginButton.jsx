import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import userProvider from "../../utils/provider/userProvider/userProvider";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();


    const postUserData = async () => {
      try {
        const newUser = {
          name: user.name,
          email: user.email,
          image: user.picture
        }
        await userProvider.createUser(newUser)
      } catch (error) {
        console.error('Error al enviar los datos del usuario al servidor:', error);
      }
    };

    isAuthenticated && user && postUserData(); //si el usuario esta autenticado y se recibieron los datos los envio al servidordel back

  
  return (
     <div>
            {!isAuthenticated ? (
                 <button onClick={() => loginWithRedirect()}>LogIn</button>
              ) : (
                <button onClick={() => logout()}>LogOut {user.name}</button>
              )}
     </div>
  );
};

export default LoginButton;