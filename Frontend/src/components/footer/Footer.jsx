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
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><MdFacebook /></a>
          <Link to={"/"}><TiSocialLinkedinCircular /></Link>
          <Link to={"/"}><AiFillTwitterCircle /></Link>
        <a href="https://github.com/Freetzen/WeDevelop" target="_blank" rel="noopener noreferrer"><FaGithub /></a>

        </div>
      </div>

      <div className={style.footerNavigation}>
        <h4>Navigation</h4>
        <div className={style.link}>
          <Link to={"/"}>Home</Link>
          <Link to={"/quote"}>Quote</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact Us</Link>
        </div>
      </div>

      <div className={style.footerContact}>
        <h4>Contact Us</h4>
        <div className={style.contact}>
          <p><IoLocationSharp className={style.icon} />Colombia-Argentina</p>
          <p><MdOutlineAlternateEmail className={style.icon} />Contactwedevelop@gmail.com</p>
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
    <footer>©WeDevelop All Rights Reserved 2024</footer>
    </div>
  )
}

export default Footer