import React, { Component } from 'react'

import './rainbow-frame.css'

export default class RainbowFrame extends Component {
  state = {
    colors: this.props.colors,
  }

  wrapperFn = colors => {
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

  componentDidUpdate(oldProps) {
    const { colors } = this.props
    if (oldProps.colors !== colors) this.setState({ colors })
  }

  render() {
    const { colors } = this.state

    return this.wrapperFn(colors)
  }
}
