import style from "./NavBar.module.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className={style.NavBarContainer}>

                    <Link to="/">
                         <div className={style.logo}>
                            <img src="./images/logo-header.png" />
                         </div>
                    </Link>
                    
                    <div className={style.menu}>
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
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
                         <Link to="/login">Login</Link>
                    </div>
    </div>
  )
}

export default NavBar