import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Routers from './Components/Routers';
import Loading from './Components/Loading';
function App() {
  const [darktheme,setdarktheme]=useState(true);
  const[term,settearm]=useState('');

  return (
    <>
      <div className={darktheme?'dark':''}>
        <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
          <Navbar darktheme={darktheme} setdarktheme={setdarktheme} term={term} settearm={settearm}/>
          <Routers term={term} settearm={settearm}/>
          <Footer/>
        </div>
        
      </div>
    </>
  )
}

export default App
