import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {
    const { user } = useAuth0()


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
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/quote">Quote</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
            {
                
            }
            <Link to="/useraccount">
            <button>account</button>
            </Link>
            <div className={style.login}>
                <Login />
            </div>
        </div>
    )
}

export default NavBar