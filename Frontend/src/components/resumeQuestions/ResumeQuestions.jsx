
import style from './ResumeQuestions.module.css';

export const ResumeQuestions = ({ quote, setQuestion }) => {

    const array = Object.keys(quote)


    const handleClick = (event) => {
        event.preventDefault()
        array.map((element) => {
            if (element === event.target.value) {
                let indexPage = array.indexOf(element) + 1;
                setQuestion(indexPage)
            }
        })
    }

    return (

        <div className={style.containerResumen}>
            <div className={style.titleCuestion}>
                <h3>Resumen</h3>
            </div>

            <div className={style.containerAnswers}>
                
                <div className={style.Answers}>
                    {
                        array.map((e, index) => (
                            <div className={style.Question} key={index}>
                                <div className={style.containerQuestion}>
                                    <span className={style.question}>{e}</span>
                                </div>
                                <div className={style.containerQuestion}>
                                    <span className={style.question}>{quote[e]}</span>
                                </div>
                                <div className={style.containerQuestion}>
                                <button
                                    className={style.button}
                                    key={index}
                                    value={e}
                                    onClick={handleClick}
                                >Editar</button>
                                </div>   
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}
