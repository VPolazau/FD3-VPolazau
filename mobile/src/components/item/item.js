import React, { Component } from 'react'
import { btnEvent } from '../events'

import './item.css'

export default class Item extends Component {
  onEdit = () => btnEvent.emit('onEdit', 'Edit')
  onSave = () => btnEvent.emit('onSave', 'Save')
  onDeleted = () => btnEvent.emit('onDeleted', 'Deleted')

  render() {
    const { itemInfo } = this.props
    const { id, lastname, name, patronymic, balance } = itemInfo

    return (
      <div className='item' key={id}>
        <div className='lastname'>{lastname}</div>
        {/* <input type='text' className='lastname' placeholder='lastname' /> */}
        <div className='name'>{name}</div>
        <div className='patronymic'>{patronymic}</div>
        <div className='balance'>{balance}</div>
        {/* <input type='text' className='balance' placeholder='balance' /> */}
        {balance > 0 ? (
          <div className='status active'>active</div>
        ) : (
          <div className='status blocked'>blocked</div>
        )}
        {/* <div className='status edit'>????</div> */}
        <button className='edit' onClick={this.onEdit}>
          Редактировать
        </button>
        {/* <button className='save' onClick={this.onSave}>Сохранить</button> */}
        <button className='delete' onClick={this.onDeleted}>
          Удалить
        </button>
      </div>
    )
  }
}
