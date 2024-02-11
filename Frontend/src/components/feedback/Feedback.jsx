import style from './Feedback.module.css'
import users from './user.js'

const Feedback = () => {

  return (
    <div className={style.containerFeedback}>

      <div className={style.ratingContainer}>
        <div className={style.NumberAndCommentsContainer}>
          <div className={style.NumberContainer}>
            <h4>4.75</h4>
            <span>★ ★ ★ ★ ★ ★</span>
            <p>(1976 Reviews)</p>
          </div>
          <div className={style.barContainer}>
            <div className={style.container}>
              <div className={style.Bar} style={{ width: '95%' }}></div>
            </div>
            <div className={style.container}>
              <div className={style.Bar} style={{ width: '75%' }}></div>
            </div>
            <div className={style.container}>
              <div className={style.Bar} style={{ width: '55%' }}></div>
            </div>
            <div className={style.container}>
              <div className={style.Bar} style={{ width: '35%' }}></div>
            </div>
            <div className={style.container}>
              <div className={style.Bar} style={{ width: '15%' }}></div>
            </div>
          </div>
        </div>

        <div className={style.commentsContainer}>
          <div className={style.title}>
            <h2>Review and comments </h2>
          </div>
          {
            users.map((user, index) => (
              <div className={style.comments} key={index}>
                <div className={style.ImageDateNameAndStartsContainer}>
                  <div className={style.User}>
                    <img src={user.urlImage} alt="" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                    <div className={style.NameAndDate}>
                      <h4>{user.name}</h4>
                      <p>{user.dayComment}</p>
                    </div>
                  </div>
                  <div className={style.startsContainer}>
                    <span>{user.stars}</span>
                  </div>
                </div>
                <div className={style.commentP}>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nisi obcaecati id saepe consequuntur explicabo porro qui ab aut sit soluta perspiciatis debitis nihil consequatur doloremque reiciendis quos, est temporibus.</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Feedback