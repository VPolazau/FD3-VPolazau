import React from 'react'
import { headEvents } from '../events'

import './head-filters.css'

const HeadFilters = () => {
  const onAll = () => headEvents.emit('onAll', 'All')
  const onActive = () => headEvents.emit('onActive', 'Active')
  const onBlocked = () => headEvents.emit('onBlocked', 'Blocked')

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
