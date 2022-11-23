import React, { useContext, useState, useEffect, useCallback } from 'react'
import { WordsContext } from '../app/app'

import Controls from '../controls'
import List from '../list'

import './filter.css'

const Filter = () => {
  const words = useContext(WordsContext)
  const [check, setCheck] = useState(false)
  const [filteredWords, setFilteredWords] = useState(words)
  const [result, setResult] = useState(filteredWords)

  const onCheckChange = () => {
    setCheck(check => !check)
  }

  const onTermChange = term => {
    setFilteredWords(filteredWords => {
      filteredWords = words.slice()
      return filteredWords.filter(line => {
        return line.indexOf(term) > -1
      })
    })
  }

  const onReset = () => {
    setCheck(() => false)
    setFilteredWords(() => words)
  }

  useEffect(() => {
    if (check)
      setResult(result => {
        const newRes = result.slice()
        return newRes.sort()
      })
    if (!check) setResult(result => filteredWords)
  }, [check, filteredWords])

  const memoReset = useCallback(onReset,[])

  return (
    <div className='Filter'>
      <Controls
        onCheckChange={onCheckChange}
        onReset={memoReset}
        onTermChange={onTermChange}
      />
      <List words={result} />
    </div>
  )
}

export default Filter
