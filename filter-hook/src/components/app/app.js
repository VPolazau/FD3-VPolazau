import React from 'react'
import Filter from '../filter'

import './app.css'

export const WordsContext = React.createContext()

const App = () => {
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

  return (
    <WordsContext.Provider value={words}>
      <Filter />
    </WordsContext.Provider>
  )
}

export default App
