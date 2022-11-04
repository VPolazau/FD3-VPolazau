import React, { Component } from 'react'
import EditForm from '../edit-form/edit-form'
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

  view = body => {
    const { title, imageUrl, price, quantity } = body
    return (
      <React.Fragment>
        <div className='imageUrl'>
          <img src={`${imageUrl}`} alt='image item' className='image' />
        </div>
        <div className='viewInfo'>
          <div className='view_title'>Title: {title}</div>
          <div className='view_price'>Price: {price}$</div>
          <div className='view_quantity'>Stock: {quantity}</div>
        </div>
        <button className='edit' onClick={e => this.onEdit(e)}>
          Edit
        </button>
      </React.Fragment>
    )
  }

  render() {
    const { onFormSave } = this.props
    const { edit, body, id } = this.state
    return edit ? <EditForm body={body} id={id} onFormSave={onFormSave} /> : this.view(body)
  }
}
