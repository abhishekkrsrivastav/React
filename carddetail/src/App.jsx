 import React from 'react'
 import { Route, Routes } from 'react-router'
import Card from './Pages/Card'
import Profile from './Pages/Profile'
import Cardpage from './Pages/Cardpage'
 const App = () => {
   return (
     <>
     <Routes>
      <Route path='/' element={<Cardpage/>}/>
      <Route path='/profile' element={<Cardpage/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
     </Routes>
     </>
   )
 }
 
 export default App