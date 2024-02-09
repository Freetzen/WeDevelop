import { Link } from 'react-router-dom'
import style from './StartQuote.module.css'
const StartQuote = () => {
  return (
    <>
      <div className={style.quoteContainer}>
        <div className={style.containerTitle}>
          <h2 className={style.quoteStartProyect}>Start Proyect</h2>
        </div>
        <div className={style.containerButton}>
          <button className={style.quoteButton}><Link to={"/quote"}>Quote Now</Link></button>
        </div>
      </div>
    </>
  )
}

export default StartQuote