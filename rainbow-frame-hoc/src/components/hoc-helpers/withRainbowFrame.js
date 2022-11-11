import React from 'react'

import RainbowFrame from '../rainbow-frame'

const withRainbowFrame = colors => Wrapped => {
  return (props) => {
    return (
      <RainbowFrame colors={colors}>
        <Wrapped {...props} />
      </RainbowFrame>
    )
  }
}

export { withRainbowFrame }
