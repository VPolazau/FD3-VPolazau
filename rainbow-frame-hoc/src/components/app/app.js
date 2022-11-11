import React from 'react'

import { withRainbowFrame } from '../hoc-helpers'
import DoubleButton from '../double-button'

import './app.css'

const App = () => {
  let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple']

  const FramedDoubleButton = withRainbowFrame(colors)(DoubleButton)

  return (
    <div className='container'>
      <DoubleButton caption1='однажды' caption2='пору'>
        в студёную зимнюю
      </DoubleButton>

      <FramedDoubleButton caption1='я из лесу' caption2='мороз'>
        вышел, был сильный
      </FramedDoubleButton>
    </div>
  )
}

export default App
