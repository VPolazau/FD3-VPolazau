import React, { Component } from 'react'
import EditForm from '../edit-form/edit-form'
import { btnEvent } from '../events'
import Item from '../item/'

import './item-list.css'

export default class ItemList extends Component {
  render() {
    const { clients } = this.props

    btnEvent.addListener('onAll', text => console.log(text))
    btnEvent.addListener('onActive', text => console.log(text))
    btnEvent.addListener('onBlocked', text => console.log(text))

    btnEvent.addListener('onEdit', text => console.log(text))
    btnEvent.addListener('onSave', text => console.log(text))
    btnEvent.addListener('onDeleted', text => console.log(text))

    btnEvent.addListener('onSaveNew', text => console.log(text))
    btnEvent.addListener('onCloseNew', text => console.log(text))
    btnEvent.addListener('newItem', text => console.log(text))

    return (
      <div className='item-list'>
        <div className='table'>
          <div className='table_head'>
            <span className='s1'>Фамилия</span>
            <span className='s2'>Имя</span>
            <span className='s3'>Отчество</span>
            <span className='s4'>Баланс</span>
            <span className='s5'>Статус</span>
            <span className='s6'>Редактировать</span>
            <span className='s7'>Удалить</span>
          </div>
          <div className='items'>
            {clients.map(itemInfo => {
              return <Item key={itemInfo.id} itemInfo={itemInfo} />
            })}
          </div>
        </div>
        {/* <EditForm /> */}
        <button
          className='new_client'
          onClick={() => btnEvent.emit('newItem', 'newItem')}
        >
          Добавить клиента
        </button>
      </div>
    )
  }
}
