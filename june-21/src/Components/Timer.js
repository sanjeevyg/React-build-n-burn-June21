import React from 'react'
import { useDispatch } from 'react-redux';
import { decrease, increase, timerC } from '../features/cart/cartSlice';

export default function Timer({timer}) {

    const dispatch = useDispatch()

  return (
      <>
        <div>Timer: {timer}</div>
        <button onClick={() => dispatch(timerC())}>Reset</button>
        <button onClick={() => dispatch(increase())}>Increase</button>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
      </>
  )
}
