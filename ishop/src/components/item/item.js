import React from 'react'

import './item.css'

const Item = ({ body }) => {
  const { title, price, imageUrl, quantity } = body

  return (
    <div className='item'>
      <div className='title'>{title}</div>
      <div className='prise'>{price}$</div>
      <div className='imageUrl'>
        <img src={`${imageUrl}`} alt='image item' className='image' />
      </div>
      <div className='quantity'>{quantity}</div>
    </div>
  )
}

export default Item
