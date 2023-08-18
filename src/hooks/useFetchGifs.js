import { useEffect, useState } from "react";
import { getGifs } from "../helpers/dataGifs";

export const useFetchGifs = (category) => {
    
    const [ dataGifs, setDataGifs ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getDataGifs = async() => {
        setDataGifs( await getGifs(category) );
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    useEffect(() => {
        getDataGifs();
    }, [])
    
    return {
        dataGifs,
        isLoading,
    }
}
