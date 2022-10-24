import React from 'react'
import './output.css'

const Output = ({ mas }) => {
  const text = mas.join('\n')
  return <textarea className='output' value={text} readOnly/>
}

export default Output
