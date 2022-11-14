import React from 'react'

import './head-filters.css'

const HeadFilters = () => {
  return (
    <div className='head-filters'>
      <button className='all'>Все</button>
      <button className='active'>Активные</button>
      <button className='bloked'>Заблокированные</button>
    </div>
  )
}

export default HeadFilters
