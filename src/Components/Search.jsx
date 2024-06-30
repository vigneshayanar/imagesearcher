import React, { useState } from 'react'
import { useResultContext } from '../helper/mycontext'

const Search = ({term,settearm}) => {
    const [inputValue, setInputValue] = useState('');    const {results,makeApiCall,setSearchTerm,searchterm,setsearch,isloading}=useResultContext();
    const handle=()=>{
        settearm(inputValue);
        console.log(term)
        setSearchTerm((searchTerm)=>searchTerm=term)
    }
  return (
    <div className='flex text-center mt-2 ml-5'>
        <input type="text"  placeholder="ENTER TO SEARCH...."className='text-purple-900 hover:text-white hover:bg-green-900 border border-purple-500 text-xs font-bold rounded-full px-6 py-3' onChange={(e)=> setInputValue(e.target.value)}/>
        <button className='ml-7 py-2 px-6  rounded-full dark:bg-gary-200 bg-green-900 text-white active:bg-blue-700' onClick={handle}>Search</button>
    </div>
  )
}

export default Search