import { useState, useEffect } from 'react';
import axios from 'axios';

// import { RAPID_API_KEY } from "@env";
// import { isLoading } from 'expo-font';

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endPoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '0914f405cbmsh70e88dc9bf5f4d5p1d38b3jsn5002d92bcd07',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        params: {
            ...query
        },
    };

    const fetchData = async () => {
        isLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false)
        } catch (error) {
            setError(error);
            alert("There is an error")
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);


    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, reFetch };
}

export default useFetch;