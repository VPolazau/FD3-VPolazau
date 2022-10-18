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
