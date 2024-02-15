
import style from './ResumeQuestions.module.css';
import { GoQuestion } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";

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

            <div className={style.containerAnswers}>
                <div className={style.Answers}>
                    <div className={style.containerTitle}>
                        <div className={style.TitleQuestion}>
                            <span>Questions</span>
                        </div>
                        <div className={style.TitleAnswer}>
                            <span>Answers</span>
                        </div>
                        <div className={style.TitleEdit}>
                            <span>Edit</span>
                        </div>
                    </div>
                    {
                        array.map((e, index) => (
                            <div className={style.Question} key={index}>
                                <div className={style.containerQuestionAndIcon}>
                                    <span className={style.question}>{e}</span>
                                    <GoQuestion />
                                </div>
                                <div className={style.containerQuestion}>
                                    <span className={style.answer}>{quote[e]}</span>
                                </div>
                                <div className={style.containerButton}>
                                    <button
                                        className={style.button}
                                        value={e}
                                        onClick={handleClick}
                                    >✎
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}
