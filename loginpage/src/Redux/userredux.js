import {createSlice} from '@reduxjs/toolkit'


const user=createSlice({
    name:'users',
    initialState:{
        userInfo:null
    },
    reducers:{
loginuser:(state,action)=>{
    console.log('*****',action.payload);
state.userInfo=action.payload
        },
        logoutuser:(state,action)=>{
            state.userInfo=null
        
        }
    }
})

export const {loginuser,logoutuser}=user.actions
export default user.reducer