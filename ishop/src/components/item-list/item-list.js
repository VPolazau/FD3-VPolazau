import React from 'react'

import Item from '../item'

import './item-list.css'

const ItemList = ({items}) => {
  const nodes = items.map(item => <Item body={item.body} itemId={item.id} key={item.id} />)
  return (
    <div className='item-list table'>
      <div className='row keys'>
        <div className='key'>Name</div>
        <div className='key'>Price</div>
        <div className='key'>Image</div>
        <div className='key'>Quantity</div>
      </div>

      <div className='items list'>{nodes}</div>
    </div>
  )
}

export default ItemList
