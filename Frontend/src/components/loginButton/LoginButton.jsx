import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();


  return (
     <div>
            {!isAuthenticated ? (
                 <button onClick={() => loginWithRedirect()}>LogIn</button>
              ) : (
                <button onClick={() => logout()}>LogOut</button>
              )}
     </div>
  );
};

export default LoginButton;