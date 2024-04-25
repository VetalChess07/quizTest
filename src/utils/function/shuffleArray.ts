import type { Question } from "../../type/questionsType";

export function shuffleArray<T>(array: T[]){
   const shuffledArray = [...array];
   shuffledArray.sort(() => Math.random() - 0.5);
   return shuffledArray;
}