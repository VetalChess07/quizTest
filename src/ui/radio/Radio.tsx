import  {FC} from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio as RadioAntd } from 'antd';
import { shuffleArray } from '../../utils/function/shuffleArray';
import type { RadioProps } from './type';

import "./style.scss"


const Radio:FC<RadioProps> = ({arrQuestions, onClick}) => {
  console.log(arrQuestions)

  const onChange = (e: RadioChangeEvent) => {
    const selectedAnswer = arrQuestions.find(question => question.answer === e.target.value);
    if (selectedAnswer) {
      onClick(selectedAnswer); 
    }
  };
 

  return (
    <RadioAntd.Group  className='radioInner'    onChange={onChange} >
      {
       shuffleArray(arrQuestions).map(el =>
          
      <RadioAntd className='radio'  key={el.answer} value={el.answer}>{el.answer}</RadioAntd>
        )
      }
     
      
      
    </RadioAntd.Group>
  );
};

export default Radio;