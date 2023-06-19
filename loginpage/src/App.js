import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
function App() {


  const signupEmail=useSelector((state)=>state.users.userInfo)
  const loginEmail=useSelector((state)=>state.loginuser. userEmail)
  console.log('signupemail',signupEmail.email);
  console.log('loginemail',loginEmail);
  

const router=createBrowserRouter([
  {
    path:'/',
    element: signupEmail.email==loginEmail ? <Home/> : <Login/>
  },
  {
    path:'signup',
    element:<Signup/>
  },
  {
    path:'login',
    element:<Login/>
  },
])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
