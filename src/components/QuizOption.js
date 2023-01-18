import React,{useState} from 'react';
export default function QuizOption({value,checkAnswer}){
  const onClickHandler =()=>{
  checkAnswer(value)

  }
  // const [bgColor,setBgColor]=useState("#e28743");
  
//   if(status===-1){
// setBgColor("#e28743")
//   }else if(status===0){
//     setBgColor("#ff0000")

//   }else{
//     setBgColor("#00ff00")
//   }
 
  return(
    <div className="option-container" 
  >
      <p onClick={onClickHandler}>{value}</p>
      </div>
  )
}