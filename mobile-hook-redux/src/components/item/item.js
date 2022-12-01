import React, { useState } from 'react'

import { btnEvent } from '../helpers/events'

import './item.css'

const Item = ({ itemInfo }) => {
  const [edited, setEdited] = useState(false)
  const { id, lastname, name, patronymic, balance } = itemInfo

  const setBalanceRef = React.createRef()
  const setLastnameRef = React.createRef()

  const onEdit = () => {
    setEdited(true)
    return btnEvent.emit('onEdit', id)
  }
  const onSave = () => {
    setEdited(false)
    return btnEvent.emit(
      'onSave',
      id,
      setLastnameRef.current.value,
      setBalanceRef.current.value
    )
  }
  const onClose = () => {
    setEdited(false)
    return btnEvent.emit('onClose')
  }
  const onDeleted = () => btnEvent.emit('onDeleted', id)

  const onEdited = (
    <div className='item' key={id}>
      <input
        type='text'
        className='lastname'
        defaultValue={lastname}
        placeholder='lastname'
        ref={setLastnameRef}
      />
      <div className='name'>{name}</div>
      <div className='patronymic'>{patronymic}</div>
      <input
        type='text'
        className='balance'
        defaultValue={balance}
        placeholder='balance'
        ref={setBalanceRef}
      />
      <div className='status edit'>????</div>
      <button className='save' onClick={onSave}>
        Сохранить
      </button>
      <button className='save' onClick={onClose}>
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
      <button className='edit' onClick={onEdit}>
        Редактировать
      </button>
      <button className='delete' onClick={onDeleted}>
        Удалить
      </button>
    </div>
  )

  return edited ? onEdited : onViewed
}

export default Item
