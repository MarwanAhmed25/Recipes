import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Load from "../Load/Load";


export default function RecipeDetail(){

    function getRecipe(){
        
        return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
    }

    let {data, isError, isLoading, error, isFetched} = useQuery({
        queryKey: ['recipe-detail'],
        queryFn: getRecipe,
        staleTime: 5000,
        refetchInterval: 5000,
        gcTime: 5000,
        select: (data)=> {
            return data.data.meals[0];
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



    return <>detail</>
}