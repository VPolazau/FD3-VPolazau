import React from 'react'
import PropTypes from 'prop-types'

import './item.css'

const Item = ({
  body: { title, price, imageUrl, quantity, selected },
  itemId,
  onItemDeleted,
  onItemSelected,
}) => {
  Item.propTypes = {
    body: PropTypes.object.isRequired,
    title: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    quantity: PropTypes.number,
  }

  let classItem = 'item'

  if (selected) classItem += ' selected'

  return (
    <div className={classItem} onClick={() => onItemSelected(itemId)}>
      <button
        type='button'
        aria-label='Close'
        className='btn del'
        onClick={() => onItemDeleted(itemId)}
      >
        <span aria-hidden='true'>×</span>
      </button>
      <div className='imageUrl'>
        <img src={`${imageUrl}`} alt='image item' className='image' />
      </div>
      <div className='price info'>
        <span className='with-discount'>{price}$</span>
        <span className='without-discount'>{(price * 1.3).toFixed(0)}$</span>
      </div>
      <div className='title info'>{title}</div>
      <div className='quantity info'>
        <div className='stock'>stock: {quantity}</div>
      </div>
    </div>
  )
}

export default Item
