import { Link } from 'react-router-dom'
import style from './StartQuote.module.css'
const StartQuote = () => {
  return (
  <>
    <div className={style.quoteContainer}>
      <h2 className={style.quoteStartProyect}>Start Proyect</h2>
      <Link to={"/quote"}>
      <button className={style.quoteButton}>Quote Now</button>
      </Link>
    </div>
  </>
  )
}

export default StartQuote