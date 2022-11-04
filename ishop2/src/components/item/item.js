import React from 'react'
import PropTypes from 'prop-types'

import './item.css'
import ViewInfo from '../view-info'

const Item = ({ body, itemId, selected, onItemDeleted, onItemSelected }) => {

  let classItem = 'item'

  if (selected) classItem += ' selected'

  const viewInfo = <ViewInfo body={body} id={itemId} />

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
      {selected ? viewInfo : info(body)}

    </div>
  )
}

const info = body => {
  const { title, imageUrl, price, quantity, discountPercentage } = body
  Item.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    quantity: PropTypes.number,
    discountPercentage: PropTypes.number,
  }
  return (
    <React.Fragment>
      <div className='imageUrl'>
        <img src={`${imageUrl}`} alt='image item' className='image' />
      </div>
      <div className='price info'>
        <span className='with-discount'>{price}$</span>
        <span className='without-discount'>{(price * discountPercentage).toFixed(0)}$</span>
      </div>
      <div className='title info'>{title}</div>
      <div className='quantity info'>
        <div className='stock'>stock: {quantity}</div>
      </div>
    </React.Fragment>
  )
}

export default Item
