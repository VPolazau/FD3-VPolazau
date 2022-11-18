import React, { PureComponent } from 'react'

import { btnEvent } from '../events'

import './item.css'

export default class Item extends PureComponent {
  state = {
    edited: false,
  }

  setBalanceRef = React.createRef()
  setLastnameRef = React.createRef()

  onEdit = () => {
    this.setState({ edited: true })
    return btnEvent.emit('onEdit', this.props.itemInfo.id)
  }
  onSave = () => {
    this.setState({ edited: false })
    return btnEvent.emit(
      'onSave',
      this.props.itemInfo.id,
      this.setLastnameRef.current.value,
      this.setBalanceRef.current.value
    )
  }
  onClose = () => {
    this.setState({ edited: false })
    return btnEvent.emit('onClose')
  }
  onDeleted = () => btnEvent.emit('onDeleted', this.props.itemInfo.id)

  render() {
    const { itemInfo } = this.props
    const { id, lastname, name, patronymic, balance } = itemInfo
    const { edited } = this.state

    const onEdited = (
      <div className='item' key={id}>
        <input
          type='text'
          className='lastname'
          defaultValue={lastname}
          placeholder='lastname'
          ref={this.setLastnameRef}
        />
        <div className='name'>{name}</div>
        <div className='patronymic'>{patronymic}</div>
        <input
          type='text'
          className='balance'
          defaultValue={balance}
          placeholder='balance'
          ref={this.setBalanceRef}
        />
        <div className='status edit'>????</div>
        <button className='save' onClick={this.onSave}>
          Сохранить
        </button>
        <button className='save' onClick={this.onClose}>
          Закрыть
        </button>
      </div>
    )

    const onViewed = (
      <div className='item' key={id}>
        <div className='lastname'>{lastname}</div>
        <div className='name'>{name}</div>
        <div className='patronymic'>{patronymic}</div>
        <div className='balance'>{balance}</div>
        {balance > 0 ? (
          <div className='status active'>active</div>
        ) : (
          <div className='status blocked'>blocked</div>
        )}
        <button className='edit' onClick={this.onEdit}>
          Редактировать
        </button>
        <button className='delete' onClick={this.onDeleted}>
          Удалить
        </button>
      </div>
    )

    console.log(`Item id=${id} render`)
    return edited ? onEdited : onViewed
  }
}
