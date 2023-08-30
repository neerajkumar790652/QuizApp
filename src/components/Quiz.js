import QuizQues from "./QuizQues";
import { useEffect, useState } from "react";
export default function Quiz()  {
  let dataSet = [
    {
      question: "what is the captital of India",
      option: ["Rajasthan", "Uttarpradesh", "Delhi", "Tamil-Nadu"],
      answer: "Delhi"
    },
    {
      question: "what is the captital of China",
      option: ["Rajasthan", "Hongkong", "Delhi", "Tamil-Nadu"],
      answer: "Hongkong"
    },
    {
      question: "what is the captital of Bihar",
      option: ["Rajasthan", "Uttarpradesh", "Patna", "Tamil-Nadu"],
      answer: "Patna"
    },
    {
      question: "what is the captital of Uttarpradesh",
      option: ["Rajasthan", "Lucknow", "Delhi", "Tamil-Nadu"],
      answer: "Lucknow"
    },
    {
      question: "what is the captital of kolkata",
      option: ["Rajasthan", "Uttarpradesh", "Delhi", "WestBengal"],
      answer: "WestBengal"
    }
  ];
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }
  useEffect(() => {
    shuffle(dataSet);
    setCurrentQues({
      data: dataSet[0],
      s_no: 1
    });
  }, []);

  const [currentQues, setCurrentQues] = useState({
    data: {
      question: "what is the captital of India",
      option: ["Rajasthan", "Uttarpradesh", "Delhi", "Tamil-Nadu"],
      answer: "Delhi"
    },
    s_no: 1
  });
  const checkAnswer=(value)=>{
    setTimeout(()=>{
      if(currentQues.data.answer===value){
        alert("Your answer is correct")
        setScore((prevValue)=>prevValue+5)
        setSubmission((prevValue)=>{
          prevValue.push(true)
          return prevValue
        })}
      else{
        alert("Your Answer is Incorrect")
        setSubmission((prevValue)=>{
          prevValue.push(false)
          return prevValue
        })
      }
      if(currentQues.s_no===dataSet.length){
        setQuizStatus(0)
      }
      setCurrentQues((prevValue)=>{
        
        return{
          data:dataSet[prevValue.s_no],
          s_no:prevValue.s_no+1
        }
      })

    },2000)
  };
 
  const [score,setScore]=useState(0);
  const [submission,setSubmission]=useState([]);
  const [quizStatus,setQuizStatus]=useState(1)

  return (
    <div className="quiz-container">
      <h2>General Quiz</h2>
      <p>Current score :{score}</p>
      {
        quizStatus? <QuizQues
        quesData={currentQues.data}
        quesNo={currentQues.s_no}
        totalQues={dataSet.length}
        checkAnswer={checkAnswer}
    
      />:<div><h1>Quiz Ended</h1>
         
      </div>
      }
     
    </div>
  );
}
