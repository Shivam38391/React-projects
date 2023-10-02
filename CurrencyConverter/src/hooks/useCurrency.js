import { useEffect, useState } from "react";



function useCurrencyInfo( currency ) {

    const [data, setdata] = useState({}) //incase the response is not come we put empyty object
    // Useeffect run the function  when a specific commponent mount
    // 1. use effect take one callback function and depencency array
    useEffect(()=> {

        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        fetch(url).then((res)=> res.json())
        .then((value) => setdata(value[currency]))
        console.log("inside useeffect",data);
    } , [currency] )

    console.log("outside usefect",data);

    return data
}



export default useCurrencyInfo;