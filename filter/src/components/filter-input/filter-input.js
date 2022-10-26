import React, { Component } from 'react'
import './filter-input.css'

export default class FilterInput extends Component {

  onSearchChange = e => {
    const term = e.target.value
    this.props.onSearchChange(term.toLowerCase())
  }

  render() {
    const {
      resetInfo: { checked, inputText },
      onCheckChange,
      onResetChange,
    } = this.props
    return (
      <div className='filter-input'>
        <input
          type='checkbox'
          className='check'
          checked={checked}
          onChange={onCheckChange}
        />
        <input
          type='text'
          className='input-text'
          onChange={this.onSearchChange}
          value={inputText}
        />
        <button className='reset' onClick={onResetChange}>
          сброс
        </button>
      </div>
    )
  }
}
