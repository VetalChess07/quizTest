import type { Answer } from "../../type/questionsType"

export type RadioProps = {
   arrQuestions: Answer[]
   onClick:(obj:Answer)=> void
}

// type Answer = {
//    answer: string;
//    is_correct: boolean;
// }

// type Question = {
//    question: string;
//    answers: Answer[];
// }

// export type RadioProps = {
//    arrQuestions: Answer;
// }