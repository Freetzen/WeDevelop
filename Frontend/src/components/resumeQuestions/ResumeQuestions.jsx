import { ImClearFormatting } from 'react-icons/im';
import style from './ResumeQuestions.module.css';

export const ResumeQuestions = ({quote, setQuestion}) => {

    const array = Object.keys(quote)

    const handleClick = (event) => {
        event.preventDefault()
        array.map((element)=>{
            if(element === event.target.value){
                let indexPage = array.indexOf(element) + 1;
                setQuestion(indexPage)
            }
        })
    }
  return (<>
    
        
            <div className={style.containerResumen}>
            {
                array.map((e, index) => (
                    <button
                        key={index}
                        value={e}
                        onClick={handleClick}
                    >{e}: {quote[e]}</button>
                ))
            }
        </div>
        
    
  </>
  )
}
