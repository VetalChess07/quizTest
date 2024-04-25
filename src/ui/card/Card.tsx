import {FC} from 'react'

import style from "./style.module.scss"
import type { CardProps } from './type'

const {card, titleCl, textCl, card__error} = style

const Card:FC<CardProps> = ({title, text, isCorrect}) => {
  return (
      <div className={isCorrect ? card : card + " "+ card__error }>
         <h2 className={titleCl}>
            {title}
         </h2>
         <p className={textCl} >
            {text}
         </p>
      </div>
  )
}

export default Card
