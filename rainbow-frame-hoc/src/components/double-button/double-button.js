import React from 'react'
// import {EventEmitter} from 'events'

import './double-button.css'

const DoubleButton = ({ caption1, caption2, onPressed, children }) => {

  // const ee = new EventEmitter()
  // ee.addListener(caption1, num => alert(num))

  return (
    <div className='doubleButton'>
      <button className='btn' onClick={() => onPressed(1)}>{caption1}</button>
      {children}
      <button className='btn' onClick={() => onPressed(2)}>{caption2}</button>
    </div>
  )
}

export default DoubleButton
