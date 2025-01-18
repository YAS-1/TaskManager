
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/signUpPage'
import HomePage from './pages/HomePage'




function App() {
  return (
        <>
          <Routes>
            <Route path="/signUp" element={<SignUpPage/>} />
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/home' element={<HomePage/>}/>
          </Routes>
        </>
  )
}


export default App
