import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.HeaderContainer}>
      <div className={style.titleContainer}>
          <h1 className={style.h1}>If you can imagine it, we can develop it</h1>
          <img src="./images/Logo-NavBar.png" alt="" />
      </div>
      <div className={style.ImgContainer}>
            <img className={style.imgResponsive} src="./images/responsive.png" alt="resposive" />
      </div>
    </div>
  )
}

export default Header