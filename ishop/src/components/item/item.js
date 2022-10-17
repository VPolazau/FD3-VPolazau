import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
  state = {
    title: null,
    price: null,
    imageUrl: null,
    quantity: null,
  }

  updateItem = () => {
    const { service, itemId } = this.props
    service.getItem(itemId).then(({ title, price, imageUrl, quantity }) => {
      this.setState({ title, price, imageUrl, quantity })
    })
  }

  componentDidMount() {
    this.updateItem()
  }

  render() {
    const { title, price, imageUrl, quantity } = this.state
    return (
        <div className='item'>
            <div className='title'>{title}</div>
            <div className='prise'>{price}$</div>
            <div className='imageUrl'><img src={`${imageUrl}`} alt='image item' className='image' /></div>
            <div className='quantity'>{quantity}</div>
        </div>
    )
  }
}
