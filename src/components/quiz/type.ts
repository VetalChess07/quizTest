import type { Answer, Question } from "../../type/questionsType"
import { Dispatch } from "react"         
import { SetStateAction } from "react"

export type QuizProps = {
   data: Question[] 
   setResult: Dispatch<unknown>
   maxCountQuestions: number
}