import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    const postUserData = async () => {
      try {
        await axios.post('http://localhost:3001/login', {
          name: user.name,
          email: user.email,
          image: user.picture
        });
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