import {createSlice} from '@reduxjs/toolkit'


const loginuser=createSlice({
    name:'loginuser',
    initialState:{
        userInfo:null,
        userEmail:null
    },
    reducers:{
logincheckuser:(state,action)=>{
    console.log('*****logggedddd',action.payload);
state.userInfo=action.payload
state.userEmail=action.payload.email
        },
        logoutcheckuser:(state,action)=>{
            state.userInfo=null
            state.userEmail=null
        
        }
    }
})

export const {logincheckuser,logoutcheckuser}=loginuser.actions
export default loginuser.reducer