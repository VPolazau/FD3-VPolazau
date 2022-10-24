import React, { Component } from 'react'
import './filter-input.css'

export default class FilterInput extends Component {
  onSearchChange = e => {
    const term = e.target.value
    this.props.onSearchChange(term.toLowerCase())
  }

  onResetChange = () => {
    this.props.onResetChange()
  }

  render() {
    const {
      resetInfo: { checked, inputText },
      onCheckChange,
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
        <button className='reset' onClick={this.onResetChange}>
          сброс
        </button>
      </div>
    )
  }
}

// const FilterInput = ({
//   resetInfo: { checked, inputText },
//   onSearchChange,
//   onCheckChange,
//   onResetChange,
// }) => {
//   return (
//     <div className='filter-input'>
//       <input
//         type='checkbox'
//         className='check'
//         checked={checked}
//         onChange={onCheckChange}
//       />
//       <input
//         type='text'
//         className='input-text'
//         onChange={e => onSearchChange(e.target.value)}
//         value={inputText}
//       />
//       <button className='reset' onClick={() => onResetChange()}>
//         сброс
//       </button>
//     </div>
//   )
// }

// export default FilterInput
