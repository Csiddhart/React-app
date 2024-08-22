import { useEffect, useState } from "react";

//now we will be creating custom Hooks and while creating custom hooks we can use existing builtin hooks in react

function useCurrencyInfo(parameter){//this takes a parameter
    const [data,setData]=useState({})//passing empty object
    useEffect(()=>{//we are using this hook because when the requirement of api fetching and when is custom hook is invoked then only it will be implemented/called
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${parameter}.json`)
        .then((res)=>res.json())//j result ta aashche seta k json a convert korchi
        .then((res)=>setData(res[parameter]))//we have to store somewhere and have to show on UI so useState is used, all the time we don't have to use . for accessing we can use this way for accessing the inside of the json file
        console.log(data)
    },[parameter])
    console.log(data);
    return data;
}

export default useCurrencyInfo