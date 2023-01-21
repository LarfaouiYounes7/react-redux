import {createSlice} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const LoginSlice = createSlice({
    initialState : {name : "" , pwd : "" , logged : false},
    name : 'counterSlice',
    reducers : {
        setName : (state,action)=>{
            return {...state,name:action.payload}
       },
        setPwd : (state,action)=>{
            return {...state,pwd:action.payload}
        },
        handleSub : (state,action)=>{
            const user = action.payload.filter(user => user.name === state.name )
            console.log(user)
            if (user)
            {
             const checkPwd = user.find(user => user.pwd === state.pwd)

             if(checkPwd){
                return {...state,logged:true}
             }
            
            }
            else {
                
            }
        },
        disconnect : (state,action)=>{
            return {name : "" , pwd : "" , logged : false}
        }
    }

})

export const {setName,setPwd,handleSub,disconnect} = LoginSlice.actions

export default LoginSlice.reducer