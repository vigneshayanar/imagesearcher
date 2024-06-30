import React, { createContext, useContext, useState } from 'react';
import Loading from '../Components/Loading';
// Define the context
export const ResultContext = createContext();



export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const[image,setimage]=useState('')
    const makeApiCall = async (query) => {
        const baseUrl = `https://images-search1.p.rapidapi.com/${query}`;
        setLoading(true);
        
        const options = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '8ea43f2169msh214f8c13edd6ef6p1ecbf7jsnc7c1654f8bff',
              'x-rapidapi-host': 'images-search1.p.rapidapi.com'           }
          };

            const response = await fetch(baseUrl,options);
            <Loading/>
            const data = await response.json();
            console.log(data)
            setResults(data.value);
            console.log(results, Array.isArray(results));
            console.log('hi')
    };

    return (
        <ResultContext.Provider value={{ results, makeApiCall, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
