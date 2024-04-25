import {FC, useState} from 'react'

import type { QuizProps } from './type'
import Radio from '../../ui/radio/Radio'
import ProgressBar from '../../ui/progressBar/ProgressBar'
import { Answer, Question } from '../../type/questionsType'
import style from "./style.module.scss"

const {quiz, title, quizInner} = style

const Quiz:FC<QuizProps> = ({data,setResult, maxCountQuestions}) => {
  
  
  const [activeIndex, setActiveIndex] = useState<number>(0)


  const onClickRadio = (obj:Answer) =>{
    console.log(obj)
    const newObj = {
     ...obj,
     question:data[activeIndex].question
    }
    console.log(newObj)
    setResult((prev:Question[]) =>[ ...prev, newObj])
    setActiveIndex(prev => prev+1)
  }
   
  return (
    <div className={quizInner} >
     <h1>Тестирование</h1>
      <div  className={quiz}>
         
        <h2 className={title}>{data[activeIndex]?.question}</h2>
      {data[activeIndex] &&  <Radio onClick={onClickRadio} arrQuestions={data[activeIndex]?.answers} /> }
      
      </div>
     <ProgressBar counter={activeIndex} maxCountQuestions={maxCountQuestions} />
    </div>
  )
}

export default Quiz
