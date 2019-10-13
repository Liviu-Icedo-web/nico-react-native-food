import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [ results, setResults ] = useState([]);//State for API
    const [ errorMessage, setErrorMessage ] = useState('');//State for error en la api

    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    };

    useEffect(() => {
        searchApi('pasta');
    },[]);

    return [searchApi, results, errorMessage ];//returnamos estas variables para SearchScreen
};