import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'

const Navbar = ({darktheme,setdarktheme,term,settearm}) => {
  return (
    <div className='p-5 pb-5 flex flex-wrap sm:jutify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to='/'>
        <p className="text-2xl bg-blue-500 text-white py-1 px-2 rounded dark:text-gray-900">
            Boogle 🔎
        </p>
        </Link>
        
        <button className='py-1 px-4 text-xl bg-gray-500 dark:bg-gary-100 rounded-full hover:shadow-lg dark:border-gray-100 border-black-900 py-1 px-2' type='button' onClick={()=>setdarktheme(!darktheme)}>{darktheme?<h3>DARK 🌑</h3>:<h3>LIGHT 💡</h3>}</button>
        </div>
        <Search term={term} settearm={settearm}/>
        </div>
  )
}

export default Navbar;