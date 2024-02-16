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
          At WebDevelop, we don't just create websites, we weave digital stories. Since our modest beginnings in 2022, we have been passionately dedicated to creating exceptional online experiences that captivate, inspire and connect.          </p>
        </div>
      </div>

    </section>
  )
}

export default AboutUs