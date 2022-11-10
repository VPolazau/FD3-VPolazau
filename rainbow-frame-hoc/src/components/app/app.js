import React from 'react'

import withRainbowFrame from '../hoc-helpers'
import DoubleButton from '../double-button'

import './app.css'

const App = () => {
  let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple']
  // return <RainbowFrame colors={colors}>Hello!</RainbowFrame>

  // let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton); 

  return (
    <DoubleButton caption1='однажды' caption2='пору' onPressed={num => alert(num)}>
      в студёную зимнюю
    </DoubleButton>
    // <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>
  )
}

export default App
