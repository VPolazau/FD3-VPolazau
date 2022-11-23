import React, { useState, useEffect, useCallback } from 'react'
import { eventBtn } from '../../events'

import Controls from '../controls'
import List from '../list'

import './filter.css'

const Filter = () => {
  const words = [
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
  ]
  // const [term, setTerm] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [filteredWords, setFilteredWords] = useState(words)

  useEffect(() => {
    console.log('filter Mount')
    setCheckbox(checkbox => false)
    eventBtn.addListener('onCheckChanged', () => {
      setCheckbox(checkbox => !checkbox)
    })

    return () => {
      console.log('filter unMount')
      eventBtn.removeListener('onCheckChanged', () => setCheckbox(!checkbox))
    }
  }, [])

  const onTermChange = (term) => {
    const newWords = [...words]
    setFilteredWords(() => {
      return newWords.filter(line => {
        return line.indexOf(term) > -1
      })
    })
  }

  const cbTermChanged = useCallback(onTermChange, [])

  console.log(filteredWords)
  return (
    <div className='Filter'>
      <Controls onTermChanged={cbTermChanged} />
      <List filteredWords={filteredWords} />
    </div>
  )
}

export default Filter
