import React from 'react'

import Item from '../item'

import './item-list.css'

const ItemList = ({ items, onItemDeleted, onItemSelected, onAddNewItem, onFormSave}) => {
  const nodes = items.map(item => (
    <Item
      body={item.body}
      selected={item.selected}
      itemId={item.id}
      key={item.id}
      onItemSelected={onItemSelected}
      onItemDeleted={onItemDeleted}
      onFormSave={onFormSave}
    />
  ))
  return (
    <div className='item-list table'>
      <div className='row'>
        <span className='key'>Online Store</span>
      </div>
      <div className='div__btn'>
        <button className='btn-new' onClick={onAddNewItem}>New Item</button>
      </div>
      <div className='container'>{nodes}</div>
    </div>
  )
}

export default ItemList
