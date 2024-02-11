import style from './Feedback.module.css'

const Feedback = () => {
  return (
    <div className={style.containerFeedback}>
      <div className={style.titleFeedback}>
        <h2>FeedBack</h2>
      </div>

      <div className={style.ratingContainer}>

        <div className={style.NumberContainer}>
          <h4>1.3</h4>
          <span>★ ★ ★ ★ ★</span>
          <p>Average Rating</p>
        </div>

        <div className={style.BarContainer}>
          <div className={style.Bar}>
            <div className={style.Percentage} style={{width: '90%'}}></div>
          </div>
          <div className={style.Bar}>
            <div className={style.Percentage} style={{width: '70%'}}></div>
          </div>
          <div className={style.Bar}>
            <div className={style.Percentage} style={{width: '30%'}}></div>
          </div>
          <div className={style.Bar}>
            <div className={style.Percentage} style={{width: '10%'}}></div>
          </div>
          <div className={style.Bar}>
            <div className={style.Percentage} style={{width: '2%'}}></div>
          </div>
        </div>

        <div className={style.startContainer}>
          <div className={style.startAndPercentage}>
            <span>★ ★ ★ ★ ☆</span>
            <p>90%</p>
          </div>
          <div className={style.startAndPercentage}>
            <span>★ ★ ★ ☆ ☆</span>
            <p>70%</p>
          </div>
          <div className={style.startAndPercentage}>
            <span>★ ★ ☆ ☆ ☆</span>
            <p>8%</p>
          </div>
          <div className={style.startAndPercentage}>
            <span>★ ☆ ☆ ☆ ☆</span>
            <p>4%</p>
          </div>
          <div className={style.startAndPercentage}>
            <span>☆ ☆ ☆ ☆ ☆</span>
            <p>2%</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Feedback