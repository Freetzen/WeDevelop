import style from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <section className={style.aboutUsContainer} id='#AboutUs'>
      <div className={style.containerimgAndTitle}>
        <div className={style.aboutUsDivImg}>
          <img src='./images/aboutUs.png' alt="AboutUsImg" />
        </div>
        <div className={style.aboutUsDiv}>
          <h3>About us</h3>
          <p>
            En WeDevelop, no solo creamos páginas web, sino que también tejemos historias digitales. Desde nuestros modestos comienzos en 2022, nos hemos dedicado apasionadamentre a la creacion de experiencias en línea excepcionales que cautivan, inspiran y conectan.
          </p>
        </div>
      </div>

    </section>
  )
}

export default AboutUs