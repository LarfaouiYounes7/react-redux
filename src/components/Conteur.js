import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { decrement, increment, initialise } from '../rtk/slices/CounterSlice'
import {disconnect} from '../rtk/slices/LoginSlice';
import "../App.css"
export default function Conteur() {
    const counter = useSelector((state)=> state.counter)

    const dispatch = useDispatch()

    return (
    
    <div className='counter-container'>

      <div className='counter-app'>
          <div class="increment-btn"><button onClick={()=> dispatch(increment())}>increment</button></div>
          <div class="decrement-btn"><button onClick={()=> dispatch(decrement())}>decrement</button></div>
          <div class="setzero-btn">
            <button onClick={()=> dispatch(initialise())}>set zero</button>
          </div>
          <h4 style={{marginTop :'-10px',marginBottom :'-10px',padding:'20px'}}>
          {counter}
          </h4>
      </div>
      <button className='disconnected-btn' onClick={()=>dispatch(disconnect())}>disconnected</button>
    </div>
  )
}
