import axios from "axios";
import Load from "../Load/Load";
import { useQuery } from "@tanstack/react-query";

export default function Recipe(){

    function getRecipe(){
        
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    }

    let {data, isError, isLoading, error, isFetched} = useQuery({
        queryKey: ['recipe'],
        queryFn: getRecipe,
        staleTime: 5000,
        refetchInterval: 5000,
        gcTime: 5000,
        select: (data)=> {
            return data.data.meals
        },
    }); 

    if(isLoading){
        return <Load />
    }

    if(isFetched){
        console.log(data);
        
    }

    if(isError){
        return <>
            <p className="w-full text-red-700 bg-red-400">{error}</p>
        </>
    }


    return <h1>recipe</h1>
}