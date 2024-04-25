import { useEffect, useState } from "react";
import useFetching from "./utils/hook/useFetchind";
import { AxiosError } from "axios";

import { questionsUrl } from "./utils/ulrsData";
import Quiz from "./components/quiz/Quiz";
import Results from "./components/results/Results";
import Loading from "./ui/loading/Loading";

import { shuffleArray } from "./utils/function/shuffleArray";

import type { Question } from "./type/questionsType";


function App() {

  const [questions, setQuestions] = useState<Question[] >([]);
  const [loading, setLoading] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean | string | AxiosError>(false)
  const [result, setResult] = useState([])
  const [countQuestions, setCountQuestions] = useState<number>(0)


  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await useFetching(questionsUrl);
      if (data) {
        const shuffledQuestions = shuffleArray(data);
        setQuestions(shuffledQuestions as Question[]);
        setError(false)
        setCountQuestions(data.length)
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      setError(error as AxiosError)
    }
    finally{
      setLoading(false)
      
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <main>
      {
        error && questions !== null
          ?  <h1>{(error as AxiosError).message}</h1>
          : loading
            ? <Loading/>
            : result.length === countQuestions
              ?
              <>
              <Results setResult={setResult} resultData={result} />
              </>
              :
              <>
              <Quiz maxCountQuestions={countQuestions} setResult={setResult} data={questions}/>
            </>
         
      }
    </main>
  );
}

export default App;
