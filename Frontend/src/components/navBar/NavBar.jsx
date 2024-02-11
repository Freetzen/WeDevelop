import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Login from "../login/Login";
import Profile from "../profile/Profile";


const NavBar = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    const handleLogin = () => {
        loginWithRedirect({
            authorizationParams: {
              redirect_uri: window.location.origin 
            }
          });
    }

    return (
        <div className={style.NavBarContainer}>

            <Link to="/" className={style.Link}>
                <div className={style.logo}>
                    <img src="./images/logo-nav.png" />
                </div>
            </Link>

            <div className={style.menu}>
                <ul>
                    <li>
                        <Link to="/home" >Home</Link>
                    </li>
                    <li>
                        <Link to="/quote">Quote</Link>
                    </li>
                    <li>
                        <Link to="/service">Service</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div className={style.login}>
                <Login />
            </div>
        </div>
    )
}

export default NavBar