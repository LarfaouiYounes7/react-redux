import {configureStore} from '@reduxjs/toolkit';
import  counterSlice  from './slices/CounterSlice';
import LoginSlice from './slices/LoginSlice';


export const store = configureStore({
    reducer : {
        counter : counterSlice,
        login : LoginSlice
    }
})