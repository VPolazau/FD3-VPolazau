import React from 'react'

const withRainbowFrame = (colors) => (Wrapped) => {

  wrapperFn = (colors) => {
    if (colors.length == 1) {
      return (
        <div
          className='wrapper'
          key={colors[0]}
          style={{ border: 'solid 10px ' + colors[0] }}
        >
          {this.props.children}
        </div>
      )
    }
    let color = colors.pop()
    return (
      <div className='wrapper' key={color} style={{ border: 'solid 10px ' + color }}>
        {this.wrapperFn(colors)}
      </div>
    )
  }

  return (props) => {
    return <Wrapped {...props}/>
  }
}

export default withRainbowFrame
