import React from 'react'

import Item from '../item'

import './item-list.css'

const ItemList = ({ items, onItemDeleted, onItemSelected }) => {
  const nodes = items.map(item => (
    <Item
      body={item.body}
      itemId={item.id}
      key={item.id}
      onItemSelected={onItemSelected}
      onItemDeleted={onItemDeleted}
    />
  ))
  return (
    <div className='item-list table'>
      <div className='row'>
        <span className='key'>Online Store</span>
      </div>
      <div className='container'>{nodes}</div>
    </div>
  )
}

export default ItemList
