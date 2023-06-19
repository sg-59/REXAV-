import React, { useState } from 'react'
import './Stylesignup.css'
import { Link } from 'react-router-dom'
import { loginpage } from '../apicall'
import { useDispatch } from 'react-redux'

const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch =useDispatch()
   
    const display = ()=>{
        console.log('login',email,password);
        loginpage(dispatch,{email,password})
    }

  return (
    <div className='Backgroundimg'>
    <div  className='Logo'></div>

    <label for="email" className='label'><b>Email</b></label>
    <input type="email" placeholder="Enter Email" name="email" className='Inputs' required onChange={(e)=>setEmail(e.target.value)}/>



    <label for="psw" className='label'><b> Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" className='Inputs' required onChange={(e)=>setPassword(e.target.value)}/>

    
    <input type='button' value='Login' className='BtnLogin' onClick={display}/>

    <p style={{color:'white'}}>Don't Have an account ?<Link to={'/signup'}><span style={{color:'white'}}>Sign Up for REXAV</span></Link></p>
    </div>
  )
}

export default Login
