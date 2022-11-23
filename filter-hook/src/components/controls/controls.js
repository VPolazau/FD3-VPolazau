import React, { useMemo } from 'react'

import './controls.css'

const Controls = () => {

  const memoizeedControls = useMemo(() => {
    console.log('render Controls')
    return (
      <div className='Controls'>
        <input
          type='checkbox'
          className='checkbox Controls__checkbox'
        />
        <input
          type='text'
          className='input-text Controls__input-text'
        />
        <button className='reset'>сброс</button>
      </div>
    )
  }, [])

  return memoizeedControls
}

export default Controls
