import React from 'react'

import style from "./style.module.scss"
const {desc} = style


const ResultsText = ({coefficientisCorrectAnswer, count}:{coefficientisCorrectAnswer:number, count:number}) => {
  
   return (
    <>
         {coefficientisCorrectAnswer < 0.50 && 
          <>
            <h1>
             Упс :(
          </h1>
          <span className={desc} >Вы неправильно ответили на все вопросы. <br />
          Нужно подучить теорию.</span>
         </>
        
          }
          {coefficientisCorrectAnswer > 0.50 && coefficientisCorrectAnswer < 1 &&   
          <>
            <h1>
            Хороший результат!
            </h1>
            <span className={desc}  >
              Вы ответили правильно на {count} вопросов. <br />
              Так держать!
            </span>
          </>
        }
          {coefficientisCorrectAnswer == 1 && 
          
          <>
          <h1>
          Поздравляем!
          </h1>
          <span className={desc}  >
              Вы правильно ответили на все вопросы. <br />
                Вы действительно отлично разбираетесь в IT. 
              </span>
        </>
                
         }
    </>
  )
}

export default ResultsText
