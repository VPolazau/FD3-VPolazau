import React, { Component } from 'react'

import './item.css'

export default class Item extends Component {
  state = {
    body: this.props.body,
  }

  onEdit = (e, id) => {
    e.stopPropagation()
    return this.props.onEdit(id)
  }

  disabled = () => {
    return this.props.blockItems ? 'disabled' : ''
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldProps.body !== this.props.body) {
      this.setState({ body: this.props.body })
    }
  }

  render() {
    const { itemId, onItemSelected, onItemDeleted, selected, blockItems, isNewItem } =
      this.props
    const { title, imageUrl, price, quantity, discountPercentage } = this.state.body

    if (!discountPercentage) discountPercentage = 1.1

    let classItem = 'item'

    if (selected && !isNewItem) {
      classItem += ' selected'
    }

    return (
      <div className={classItem} onClick={() => onItemSelected(itemId)}>
        <button
          type='button'
          aria-label='Close'
          className='btn del'
          onClick={() => onItemDeleted(itemId)}
          disabled={this.disabled()}
        >
          <span aria-hidden='true'>×</span>
        </button>
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
          <div className='btn edit'>
            <button
              className='edit'
              onClick={e => this.onEdit(e, itemId)}
              disabled={this.disabled()}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    )
  }
}
