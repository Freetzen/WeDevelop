
export const ResumeQuestions = ({quote, question, setQuestion}) => {

    const array = Object.keys(quote)
    const values = Object.values(quote);
    console.log(array)

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
    
        {
            array.map((e,index)=>(
               
                <button
                key={index}
                value={e}
                onClick={handleClick}
                >{e}: {quote[e]}</button>
                
            ))
        }
    
  </>
  )
}
