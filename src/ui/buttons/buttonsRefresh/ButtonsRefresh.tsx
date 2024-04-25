import  { ReactNode, FC } from 'react'
import { Button } from 'antd'

import style from "./style.module.scss"

const  {buttonsRefresh} = style

type ButtonsRefreshProps ={
   children:ReactNode
   onClick:()=>void
}

const ButtonsRefresh:FC<ButtonsRefreshProps> = ({children, onClick}) => {
  return (
   <Button className={buttonsRefresh} onClick={onClick} type="primary">{children}</Button>
  )
}

export default ButtonsRefresh
