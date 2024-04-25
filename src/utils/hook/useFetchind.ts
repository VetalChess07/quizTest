import axios from "axios";

export default async function useFetching(url:string){
   const {data} = await axios.get(url)
  
   return data
}