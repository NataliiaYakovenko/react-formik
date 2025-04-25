import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <nav><Link to="/LogIn">Log In</Link><Link to='/SignUp'>Sign Up</Link></nav>
      <Routes>
         <Route path='/LogIn' element={<LogIn/>} ></Route>
         <Route path='/SignUp' element={<SignUp/>} ></Route>
         <Route path='/*' element={<NotFound/>} ></Route>
      </Routes>
    </Router>

  );
}

export default App;
