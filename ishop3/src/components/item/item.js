import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './item.css'
import ViewInfo from '../view-info'

export default class Item extends Component {

  info = body => {
    let { title, imageUrl, price, quantity, discountPercentage } = body
    if (!discountPercentage) discountPercentage = 1.1
  
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
          <span className='without-discount'>
            {(price * discountPercentage).toFixed(0)}$
          </span>
        </div>
        <div className='title info'>{title}</div>
        <div className='quantity info'>
          <div className='stock'>stock: {quantity}</div>
        </div>
      </React.Fragment>
    )
  }

  render() {
    const {body, itemId, selected, onItemSelected, onItemDeleted, onFormSave} = this.props
    let classItem = 'item'

    if (selected) classItem += ' selected'

    const viewInfo = <ViewInfo body={body} id={itemId} onFormSave={onFormSave}/>

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
        {selected ? viewInfo : this.info(body)}
      </div>
    )
  }
}
