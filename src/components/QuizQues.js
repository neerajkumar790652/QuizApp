import QuizOption from "./QuizOption";
export default function QuizQues({quesData,quesNo,totalQues,checkAnswer}) {
  const {question,option}=quesData;
  
  return (
    <div className="ques-container">
      <p>Question {quesNo} out of {totalQues}</p>
      <p>{question} ?</p>
      {option.map((item,index)=><QuizOption value={item} key={index} checkAnswer={checkAnswer} />)}
    
  
    </div>
  );
}
