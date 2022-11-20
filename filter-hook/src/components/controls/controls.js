import React from 'react'
import { eventBtn } from '../../events'

import './controls.css'

const Controls = () => {

  const onCheckChanged = () => eventBtn.emit('onCheckChanged', 'check')

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
      />
      <button className='reset'>
        сброс
      </button>
    </div>
  )
}

export default Controls
