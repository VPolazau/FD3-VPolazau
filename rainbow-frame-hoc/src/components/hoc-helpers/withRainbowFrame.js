import React from 'react'

import './withRainbowFrame.css'

const withRainbowFrame = colors => Wrapped => {
  return props => {
    let child = <Wrapped {...props} />
    colors.forEach(color => {
      child = <div className='wrapper' style={{ border: 'solid 10px ' + color }}>{child}</div>
    });

    return child
  }
}

export { withRainbowFrame }
