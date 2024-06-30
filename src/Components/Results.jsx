import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../helper/mycontext'
import Loading from './Loading'
const Results = ({term,settearm}) => {
    const {results,makeApiCall,setSearchTerm,searchterm,setsearch,isloading}=useResultContext();
    const location=useLocation();
    if (isloading) return<Loading/>;
    console.log(location.pathname)
    console.log(term)
    useEffect(()=>{
        if (term){
            makeApiCall(`search?q=${term}`);
        }
            },[term])
    if (!Array.isArray(results)) {
        return <div>Error: Results is not an array</div>;
      }
    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {console.log(results)}
                    {results ? (
                        results.map(({ name,contentUrl, hostPageDisplayUrl,contenturl }) => (
                            <div key={name} className="md:w-2/5 w-full">
                            <a href={contenturl} target="_blank" rel="noreferrer">
                                <p className="text-sm">{contentUrl && <img src={contentUrl} alt={name} className="mt-2  h-50 w-50" />}</p>
                                <p className="text-lg text-slate-900 dark:text-slate-400 ">
                                {name}
                                </p>
                                <p className="text-base hover:underline-blue-500 text-blue-900 dark:text-gray-100 text-gray-900">
                                    <a href={hostPageDisplayUrl}>{hostPageDisplayUrl}</a>
                                    </p>

                            </a>
                            </div>
                        ))
                        ) : (
                        <div>No results found</div>
                        )}
                </div>
            )    
        default:
            return 'ERROR';
    }
}

export default Results