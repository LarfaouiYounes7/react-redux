import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState : 0,
    name : 'counterSlice',
    reducers : {
       increment : (state,action)=>{
        return state+1
       },
       decrement : (state,action)=>{
        return state-1
       },
       initialise : (state,action)=>{
        return 0
       },
    }

})

export const {increment,decrement,initialise} = counterSlice.actions

export default counterSlice.reducer