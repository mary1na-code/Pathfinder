import { useState } from "react";


function Validate({question}) {

const MAX_ATTEMPTS = 3
const [status, setStatus] = useState("idle")
const [attempts, setAttempts] = useState(0)
const [ feedback, setFeedback] = useState("")
const [ rationale, setRationale] = useState(null)
const [selectedOption, setSelectedOption]= useState(null)
  
  function validateAnswer (option) {
  
    if (option === question.answer) {
    setStatus("correct")
    setFeedback("correct")
  } else {
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    if (newAttempts < MAX_ATTEMPTS) {
      setStatus("incorrect")
      setFeedback("Incorrect - try again")
    } else {
      setStatus("locked")
      setFeedback("out of attempts.")
      setRationale(question.rationale)
    }
  }
}

return (

   <> 
   {Object.entries(question.options).map(([key, text]) => (
    <button 
    key={key}
    className={`answer-btn ${selectedOption === key ? status : ""}`}
    onClick= {() => {
        setSelectedOption(key)
        validateAnswer(key, question.answer, question.rationale)
    }}
    disabled={status === "locked"}
    >
        {key}.{text}
    </button>
   ))}

   {feedback && <p className="feedback">{feedback}</p>}
   {status=== "locked" && rationale && (
    <p className="rationale">{rationale}</p>
   )}
   </>
)
}

export default Validate