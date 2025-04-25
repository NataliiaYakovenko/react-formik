import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
import stylesLog from "./components/LogIn/LogIn.module.scss";
import stylesSign from "./components/SignUp/SignUp.module.scss";
import stylesNotFound from "./components/NotFound/NotFound.module.scss";

function Links() {
  const path = useLocation();

  if (path.pathname === "/LogIn") {
    return (
      <div className={stylesLog.navWrapper}>
        <Link to="/SignUp" className={stylesLog.linkRouter}>
          Sign Up
        </Link>
      </div>
    );
  } else if (path.pathname === "/SignUp") {
    return (
      <div className={stylesSign.navWrapper}>
        <Link to="/LogIn" className={stylesSign.router}>
          Log In
        </Link>
      </div>
    );
  } else {
    return (
      <div className={stylesNotFound.navWrapper}>
        <Link to="/SignUp" className={stylesNotFound.routerLog}>
          Sign Up
        </Link>
        <Link to="/LogIn" className={stylesNotFound.routerSign}>
          Log In
        </Link>
      </div>
    );
  }
}

function App() {
  return (
    <Router>
      <nav>
        <Links />
      </nav>
      <Routes>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
