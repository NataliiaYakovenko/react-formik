import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from './components/LogIn/LogIn'
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App