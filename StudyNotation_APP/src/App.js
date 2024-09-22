import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";



function App() {

  const[islogedin, SetLogedin] =useState(false);

  return (
    <div className="w-screen h-screen flex flex-col bg-richblack-900">
      <Navbar islogedin={islogedin} SetLogedin={SetLogedin} />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login SetLogedin={SetLogedin} />} />
        <Route path="/signup" element={<Signup SetLogedin={SetLogedin} />} />
        
        <Route path="/dashboard" element={
            <PrivateRoute islogedin={islogedin}><Dashboard/></PrivateRoute>
          }
        />
        
        
      </Routes>
    </div>
  );
}

export default App;
