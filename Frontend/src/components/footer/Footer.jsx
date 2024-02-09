import style from './Footer.module.css'
import { Link } from 'react-router-dom'
import { MdFacebook } from "react-icons/md";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";




const Footer = () => {
  return (
<div className={style.containerFooter}>
    <div className={style.footer}>

      <div className={style.footerSocial}>
        <img src="./images/logo-nav.png" alt="" />
        <span>By Developers</span>
        <div className={style.socials}>
          <Link to={"/"}><MdFacebook /></Link>
          <Link to={"/"}><TiSocialLinkedinCircular /></Link>
          <Link to={"/"}><AiFillTwitterCircle /></Link>
          <Link to={"/"}><FaGithub /></Link>
        </div>
      </div>

      <div className={style.footerNavigation}>
        <h4>Navigation</h4>
        <div className={style.link}>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Quote</Link>
          <Link to={"/"}>Service</Link>
          <Link to={"/"}>Contact Us</Link>
        </div>
      </div>

      <div className={style.footerContact}>
        <h4>Contact Us</h4>
        <div className={style.contact}>
          <p><IoLocationSharp className={style.icon} />Colombia-Argentina</p>
          <p><MdOutlineAlternateEmail className={style.icon} />nosCortamos@gmail.com</p>
          <p><FaPhoneAlt className={style.icon} />+54 9 3543 579562</p>
        </div>
      </div>

      <div className={style.footerNewLetter}>
        <div className={style.input}>
          <label htmlFor="">Subscribe to our newsletter</label>
          <input type="text" placeholder='Enter email' />
          <button >Submit</button>
        </div>
      </div>
      
    </div>
    <footer>©WeDevelop Todos los derechos reservados 2024</footer>
    </div>
  )
}

export default Footer