import style from './Footer.module.css'
const Footer = () => {
  return (

    <div className={style.footer}>
      <div className={style.footerContainer1}>
        <h3>Quick Links</h3>
        <a href="/home">Home</a>
        <a href="/quote">Quote</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact Us</a>
      </div>
      
      <div className={style.footerContainer2}>
        <h3>NEWSLETTER</h3>
        <form >
          <input type="email" placeholder="Enter your email address" required/>
          <br />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className={style.footerContainer3}>
        <h3>Contact Us</h3>
        <p>Cordoba, Argentina </p>
        <p>+35 43579562</p>
        <a href="https://www.facebook.com/" target="_blank" rel="iconfacebook"><img src="./images/iconFB.png" alt="Facebook"></img></a>
        <a href="https://www.instagram.com/" target="_blank" rel="iconinstagram"><img src="./images/iconIG.png" alt="Instagram"></img></a>
        <a href="https://github.com/Freetzen/WeDevelop" target="_blank" rel="icongithub"><img src="./images/iconGH.png" alt="GitHub" /></a>
      </div>
    </div>
  )
}

export default Footer