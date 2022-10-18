import React from 'react'

import Item from '../item'

import './items.css'

const Items = ({ service, idArr }) => {
  const newArrItems = idArr.map(id => <Item service={service} itemId={id} key={id} />)
  return (
    <div className='items table'>
      <div className='row keys'>
        <div className='key'>Name</div>
        <div className='key'>Price</div>
        <div className='key'>Image</div>
        <div className='key'>Quantity</div>
      </div>

      <div className='items list'>{newArrItems}</div>
    </div>
  )
}

export default Items
