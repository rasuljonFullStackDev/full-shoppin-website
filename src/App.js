import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import NavBar from './shopComponets/NavBar'
const App = () => {
  return (
    <>
        <>
        <NavBar/>
        </>
     <Routes>
  
        <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App