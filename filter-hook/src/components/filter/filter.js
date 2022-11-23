import React, { useContext, useState, useEffect, useCallback } from 'react'
import { WordsContext } from '../app/app'

import Controls from '../controls'
import List from '../list'

import './filter.css'

const Filter = () => {
  const wordsContext = useContext(WordsContext)
  const [words, setWords] = useState(wordsContext)

  const onCheckChange = () => {
    console.log('checkChanged')
  }
  
  const onReset = () => {
    console.log('reset')
  }

  return (
      <div className='Filter'>
        <Controls 
        onCheckChange={onCheckChange}
        onReset={onReset}
        />
        <List wordsArr={words}/>
      </div>
  )
}

export default Filter
