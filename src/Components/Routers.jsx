import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Search from './Search';
import Results from './Results';
const Routers = ({term,settearm}) => {
  return (

  <div className='p-4'>
    <Routes>
      <Route path='/' element={<Navigate to="/search" />} />
      <Route path='/search' element={<Results term={term} settearm={settearm} />} />
      <Route path='/images' element={<Results term={term} settearm={settearm}/>} />
      <Route path='/news' element={<Results term={term} settearm={settearm} />} />
      <Route path='/videos' element={<Results term={term} settearm={settearm}/>} />
    </Routes>
  </div>

  )
}

export default Routers;