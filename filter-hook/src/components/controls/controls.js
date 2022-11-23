import React, { useMemo } from 'react'
import { eventBtn } from '../../events'

import './controls.css'

const Controls = ({ onTermChanged }) => {
  const onCheckChanged = () => eventBtn.emit('onCheckChanged', 'check')

  const onTextChanged = e => {
    const term = e.target.value
    return onTermChanged(term.toLowerCase())
  }

  const memoizeedControls = useMemo(() => {
    console.log('render Controls')
    return (
      <div className='Controls'>
        <input
          type='checkbox'
          className='checkbox Controls__checkbox'
          onClick={onCheckChanged}
        />
        <input
          type='text'
          className='input-text Controls__input-text'
          onChange={onTextChanged}
        />
        <button className='reset'>сброс</button>
      </div>
    )
  }, [])

  return memoizeedControls
}

export default Controls
