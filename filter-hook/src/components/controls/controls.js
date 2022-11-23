import React, { useMemo, useRef } from 'react'

import './controls.css'

const Controls = ({ onCheckChange, onReset }) => {
  const inputTextRef = useRef()
  const inputCheckRef = useRef()

  const onResetChange = () => {
    inputTextRef.current.value = ''
    inputCheckRef.current.checked = false
    return onReset()
  }

  const memoizeedControls = useMemo(() => {
    console.log('render Controls')
    return (
      <div className='Controls'>
        <input
          type='checkbox'
          className='checkbox Controls__checkbox'
          ref={inputCheckRef}
          onChange={onCheckChange}
        />
        <input
          type='text'
          className='input-text Controls__input-text'
          ref={inputTextRef}
        />
        <button className='reset' onClick={onResetChange}>
          сброс
        </button>
      </div>
    )
  }, [])

  return memoizeedControls
}

export default Controls
