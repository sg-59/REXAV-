import { logincheckuser } from "./Redux/loginredux";
import { loginuser } from "./Redux/userredux";

export const signuppage= async (dispatch,data)=>{
     dispatch(loginuser(data))
    
}

export const loginpage= async (dispatch,data)=>{
    dispatch(logincheckuser(data))
   
}

