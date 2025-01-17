import {BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from "./components/Login";
import Home from "./components/Home";
import ForgotPasswrod from "./components/ForgotPasswrod";
import Dashboard from "./components/Dashboard";

function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>
        
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/signup" element={<Signup/>}></Route>
          <Route path = "/login" element={<Login/>}></Route>
        <Route path="/forgotPassword" element={<ForgotPasswrod />}></Route>
        <Route path="/dashboard" element={<Dashboard />}  ></Route>
        
        </Routes>
      </BrowserRouter>
  )
}

export default App
