import React from 'react'
import { btnEvent } from '../events'

import './head-filters.css'

const HeadFilters = () => {
  const onAll = () => btnEvent.emit('onAll', 'All')
  const onActive = () => btnEvent.emit('onActive', 'Active')
  const onBlocked = () => btnEvent.emit('onBlocked', 'Blocked')

  return (
    <div className='head-filters'>
      <button className='all' onClick={onAll}>
        Все
      </button>
      <button className='active' onClick={onActive}>
        Активные
      </button>
      <button className='blocked' onClick={onBlocked}>
        Заблокированные
      </button>
    </div>
  )
}

export default HeadFilters
