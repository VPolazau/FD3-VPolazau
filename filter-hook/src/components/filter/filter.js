import React, { useContext, useState, useEffect, useCallback } from 'react'
import { WordsContext } from '../app/app'

import Controls from '../controls'
import List from '../list'

import './filter.css'

const Filter = () => {
  const wordsContext = useContext(WordsContext)
  const [words, setWords] = useState(wordsContext)

  return (
      <div className='Filter'>
        <Controls />
        <List wordsArr={words}/>
      </div>
  )
}

export default Filter
