import React, { Component } from 'react'
import './view-info.css'

export default class ViewInfo extends Component {
  state = {
    body: this.props.body,
    id: this.props.id,
    edit: false,
  }

  onEdit = event => {
    event.stopPropagation()
    this.setState({ edit: true })
  }

  view(body) {
    const { title, imageUrl, brand, price, description, quantity } = body
    return (
      <React.Fragment>
        <div className='imageUrl'>
          <img src={`${imageUrl}`} alt='image item' className='image' />
        </div>
        <div className='viewInfo'>
          <div className='view_title'>Title: {title}</div>
          <div className='view_brand'>Brand: {brand}</div>
          <div className='view_price'>Price: {price}$</div>
          <div className='view_description'>Description: {description}</div>
          <div className='view_quantity'>Stock: {quantity}</div>
        </div>
        <button className='edit' onClick={e => this.onEdit(e)}>
          Edit
        </button>
      </React.Fragment>
    )
  }

  render() {
    return this.view(this.state.body)
  }
}
