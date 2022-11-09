import React from 'react'

import RainbowFrame from '../rainbow-frame'

import './app.css'

const App = () => {
  let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple']
  return <RainbowFrame colors={colors}>Hello!</RainbowFrame>
}

export default App
