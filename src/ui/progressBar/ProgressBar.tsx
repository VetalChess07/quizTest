import {FC} from 'react'

import style from "./style.module.scss"
const {progressbar,counterInner ,progressbarInner, count,progressbarCounter } = style
import type { ProgressBarProps } from './type'

const ProgressBar:FC<ProgressBarProps> = ({maxCountQuestions, counter}) => {
   
  return (
   <div className={progressbarInner}>
      <div className={counterInner}>
         <span className={count}>0</span> 
         <span className={count}>{maxCountQuestions}</span>
      </div>
      <div className={progressbar} style={{width:`${100 / maxCountQuestions * counter }%`}}>
         <span className={progressbarCounter +' ' + count}>{counter}</span>
      </div>
   
   </div>
    
  )
}

export default ProgressBar
