import React from 'react'
import './homestyled.css'
import { useDispatch } from 'react-redux'
import { logoutcheckuser } from '../Redux/loginredux'
const Home = () => {
const dispatch=useDispatch()
    const logout = ()=>{
        dispatch(logoutcheckuser())
    }

  return (
    <div className='Homepage'>
    <div className='Navbar'>
        <h1></h1>
<button onClick={logout}>Logout</button>
    </div>
    
    </div>
  )
}

export default Home
