import { useEffect, useState } from "react";



function useCurrencyInfo( currency ) {

    const [data, setdata] = useState({})
    // Useeffect run the function  when a specific commponent mount
    // 1. use effect take one callback function and depencency array
    useEffect(()=> {

        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        fetch(url).then((res)=> res.json())
        .then((value) => setdata(value[currency]))
        console.log(data);
    } , [currency] )

    console.log("utside usefect",data);

    return data
}



export default useCurrencyInfo;