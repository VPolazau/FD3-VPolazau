import React from 'react'

import './withRainbowFrame.css'

const withRainbowFrame = colors => Wrapped => {
  return props => {
    return colors.reduce((acc, color) => {
      return (
        <div className='wrapper' key={color} style={{ border: 'solid 10px ' + color }}>
          {acc}
        </div>
      )
    }, <Wrapped {...props} />)
  }
}

export { withRainbowFrame }
