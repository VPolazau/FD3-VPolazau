import React from 'react'
import './items.css'
import Item from '../item'

const Items = ({ service, arrId }) => {
  const newArrItems = arrId.map(id => <Item service={service} itemId={id} key={id} />)
  console.log(newArrItems)
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
