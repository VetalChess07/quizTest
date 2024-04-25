import { SetStateAction } from "react";
import { ResultProps } from "antd";

type ResultsItem ={
   question: string,
   answer: string,
   is_correct: boolean
}

export type ResultsProps = {
   resultData:ResultsItem[]
   setResult: (value: SetStateAction<ResultProps[]>) => void;
}