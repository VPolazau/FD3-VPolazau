import React from 'react'
import PropTypes from 'prop-types'

import './item.css'

const Item = ({ body }) => {
  const { title, price, imageUrl, quantity } = body

  Item.propTypes = {
    body: PropTypes.object.isRequired,
    title: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    quantity: PropTypes.number,
  }

  return (
    <div className='item'>
      <div className='imageUrl'>
        <img src={`${imageUrl}`} alt='image item' className='image' />
      </div>
      <div className='price info'>
        <span className='with-discount'>{price}$</span>
        <span className='without-discount'>{(price * 1.3).toFixed(0)}$</span> 
      </div>
      <div className='title info'>{title}</div>
      <div className='quantity info'>stock: {quantity}</div>
    </div>
  )
}

export default Item
