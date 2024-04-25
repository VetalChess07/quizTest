export type Answer = {
   answer: string;
   is_correct: boolean;
 }
 
export type Question = {
   question: string;
   answers: Answer[];
 }
