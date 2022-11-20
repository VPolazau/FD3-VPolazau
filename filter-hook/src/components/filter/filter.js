import React, { useState, useEffect } from 'react'
import { eventBtn } from '../../events'

import Controls from '../controls'
import List from '../list'

import './filter.css'

const Filter = () => {
  const [words, setWords] = useState([
    'california',
    'everything',
    'aboveboard',
    'washington',
    'basketball',
    'weathering',
    'characters',
    'literature',
    'contraband',
    'appreciate',
  ])
  const [term, setTerm] = useState('')
  const [checkbox, setCheckbox] = useState(false) 

  useEffect(() => {
    eventBtn.addListener('onCheckChanged', () => setCheckbox(!checkbox))
  
    return () => {
      eventBtn.removeListener('onCheckChanged', () => setCheckbox(!checkbox))
    }
  }, [])

  return (
    <div className='Filter'>
      <Controls />
      <List />
    </div>
  )
}

export default Filter
