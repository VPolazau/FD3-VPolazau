import React, { Component } from 'react'
import { headEvents } from '../events'
import Item from '../item/'

import './item-list.css'

export default class ItemList extends Component {
  render() {
    const { clients } = this.props

    // headEvents.addListener('onAll', text => console.log(text))
    // headEvents.addListener('onActive', text => console.log(text))
    // headEvents.addListener('onBlocked', text => console.log(text))

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
        <button className='new_client'>Добавить клиента</button>
      </div>
    )
  }
}
