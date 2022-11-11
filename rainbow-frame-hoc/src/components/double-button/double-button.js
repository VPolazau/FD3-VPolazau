import React from 'react'
import {EventEmitter} from 'events'

import './double-button.css'

const DoubleButton = ({ caption1, caption2, onPressed, children }) => {

  const alertMsg = num => alert(num)

  const ee = new EventEmitter()
  ee.addListener(caption1, alertMsg)
  ee.addListener(caption2, alertMsg)

  return (
    <div className='doubleButton'>
      <button className='btn' onClick={() => {ee.emit(caption1, 1)}}>{caption1}</button>
      {children}
      <button className='btn' onClick={() => {ee.emit(caption2, 2)}}>{caption2}</button>
    </div>
  )
}

export default DoubleButton
