import { useState , useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint,query) => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      query: 'Node.js developer in New-York, USA',
      page: '1',
      num_pages: '1',
      date_posted: 'all'
    },
    headers: {
      'x-rapidapi-key': '0914f405cbmsh70e88dc9bf5f4d5p1d38b3jsn5002d92bcd07' ,
      'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    },
    params:{...query}
  };


  const fetchData= async () => {
    setIsLoading(true);

    try{
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch(error) {
      setError(error);
      alert('This is an error');
    } finally{
      setIsLoading(false);
    }
  }

  useEffect(() =>{
    fetchData();
  },[]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch}
}

export default useFetch;