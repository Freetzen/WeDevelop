import style from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <section className={style.aboutUsContainer}>
        <div className={style.aboutUsDivImg}>
          <img src='./images/work2.jpg' alt="AboutUsImg" />
        </div>

        <div className={style.aboutUsDiv}>
          <p>
            En WeDevelop, no solo creamos páginas web, sino que también tejemos historias digitales. Desde nuestros modestos comienzos en 2022, nos hemos dedicado apasionadamentre a la creacion de experiencias en línea excepcionales que cautivan, inspiran y conectan.
          </p>
        </div>

    </section>
  )
}

export default AboutUs