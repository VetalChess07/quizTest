import {FC} from 'react'
import type { ResultsProps } from './type'

import Card from '../../ui/card/Card'
import ButtonsRefresh from '../../ui/buttons/buttonsRefresh/ButtonsRefresh'
import ResultsText from '../../ui/resultsText/ResultsText'

import { countIsCorrectAnswer } from '../../utils/function/countisCorrectAnswer'

import style from "./style.module.scss"

const {result, resultCardInner,resultButtonInner} = style


const Results:FC<ResultsProps> = ({resultData, setResult}) => {
   const count = countIsCorrectAnswer(resultData, 'is_correct')
   const coefficientisCorrectAnswer = count /  resultData.length 
   console.log(count)

  
   const handleReload = () => {
      setResult([])
    };
  return (

    <div className={result}>
      <ResultsText count={count} coefficientisCorrectAnswer={coefficientisCorrectAnswer}/>
      
      <div className={resultCardInner}>
        {resultData.map(result => <Card key={result.question} isCorrect={result.is_correct} title={result.question} text={result.answer} />)}
      </div>
      <div className={resultButtonInner}>
        {
          coefficientisCorrectAnswer !== 1 &&
        <ButtonsRefresh onClick={handleReload}>
          Пройти еще раз
        </ButtonsRefresh>
        }
        
      </div>
      
    </div>
  )
}

export default Results
