import React from 'react';
import styles from "./Desing.module.css";

export const Desing = ({quote, setQuote, question, setQuestion}) => {

  const handleClick = (e) => {
    const valueClick = e.target.value
    setQuote({
      ...quote,
      'desing': valueClick
    })
    setQuestion(question + 1)
  }




  return (
    <div className={styles.container}>
      <h1>Web model</h1>
      <div className={styles.imageContainer}>
        <div className={styles.model} onClick={handleClick}>
          <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/26768/image/Wanium%20-%20A%20Elegant%20Multi-Concept%20Theme.jpg" alt="model2" width="300px" height="400px"/>
        </div>
        <div className={styles.model} onClick={handleClick}>
          <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/26768/image/Arredo%20-%20Clean%20Furniture%20Store.jpg" alt="model3" width="300px" height="400px"/>
        </div>
        <div className={styles.model} onClick={handleClick}>
          <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/26768/image/Pearl%20-%20Corporate%20Business%20WordPress%20Theme.jpg" alt="model4" width="300px" height="400px"/>
        </div>
        <div className={styles.model} onClick={handleClick}>
          <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/26768/image/ella.jpg" alt="model5" width="300px" height="400px"/>
        </div>
      </div>
      <textarea className={styles.textArea} placeholder='Comments'></textarea>
    </div>
  )
}