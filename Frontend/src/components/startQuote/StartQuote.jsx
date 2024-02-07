import style from './StartQuote.module.css'
const StartQuote = () => {
  return (<>
    <div className={style.quoteContainer}>
      <h2 className={style.quoteStartProyect}>Start Proyect</h2>
      <button className={style.quoteButton}>Quote Now</button>
    </div>
  </>
  )
}

export default StartQuote