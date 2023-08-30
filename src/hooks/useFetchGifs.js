import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [ dataGifs, setDataGifs ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getDataGifs = async() => {
        setDataGifs( await getGifs(category) );
        setIsLoading(false);
    }

    useEffect(() => {
        getDataGifs();
    }, [])
    
    return {
        dataGifs,
        isLoading,
    }
}

useFetchGifs.propTypes = {
    category: PropTypes.string.isRequired,
}