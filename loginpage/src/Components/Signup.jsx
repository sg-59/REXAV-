import React, { useState } from 'react'
import './Stylesignup.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signuppage } from '../apicall'
const Signup = () => {

    const[name,setName]=useState('') 
    const[email,setEmail]=useState('') 
    const[mobile,setMobile]=useState(Number) 
    const[password,setPassword]=useState('') 
    const[confirmpassword,setconfirmpassword]=useState('') 
    const dispatch =useDispatch()

    const userInfo={
        name,
        email,
        mobile,
        password,
        confirmpassword
    }

    const display = ()=>{
        console.log(userInfo);
        signuppage(dispatch,userInfo)
    }

  return (
    <div className='Backgroundimg'>
    <div  className='Logo'></div>
    <h3 style={{color:'white'}}>Signup for a Rexav <br/> Account</h3>
 
    <label for="text" className='label'><b>Whats your Name</b></label>
    <input type="text" placeholder="Full name" name="name" className='Inputs' required onChange={(e)=>setName(e.target.value)} />

    <label for="email" className='label'><b>Email</b></label>
    <input type="email" placeholder="Enter Email" name="email" className='Inputs' required onChange={(e)=>setEmail(e.target.value)}/>

    <label for="Mobile" className='label'><b>Mobile</b></label>
    <input type="number"  placeholder=" +91 Phone" name="mobile" className='Inputs' required onChange={(e)=>setMobile(e.target.value)}/>

    <label for="psw" className='label'><b>Create Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" className='Inputs' required onChange={(e)=>setPassword(e.target.value)}/>

    <label for="psw-repeat" className='label'><b>Confirm Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" className='Inputs' required onChange={(e)=>setconfirmpassword(e.target.value)}/>
    
    <input type='button' value='Sign Up' className='Btn' onClick={display}/>

    <p style={{color:'white'}}>Have an account ?<Link to={'/login'}><span style={{color:'white'}}>login</span></Link></p>
    </div>
  )
}

export default Signup
