export function countIsCorrectAnswer<T>(arr: T[], target: keyof T): number {
   return arr.reduce((acc, el) => el[target] ? acc + 1 : acc, 0);
 }