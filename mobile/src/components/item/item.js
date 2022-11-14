import React, { Component } from 'react'

import './item.css'

export default class Item extends Component {
  render() {
    const { itemInfo } = this.props
    const { lastname, name, patronymic, balance } = itemInfo
    console.log(name)
    return (
      <div className='item'>
        <div className='lastname'>{lastname}</div>
        <div className='name'>{name}</div>
        <div className='patronymic'>{patronymic}</div>
        <div className='balance'>{balance}</div>
        {/* <div className='status active'>active</div> */}
        <div className='status blocked'>blocked</div>
        <button className='edit'>Редактировать</button>
        <button className='delete'>Удалить</button>
      </div>
    )
  }
}
