import React, { Component } from 'react'

import { btnEvent } from '../events'

import './edit-form.css'

export default class EditForm extends Component {

  onSaveNew = () => btnEvent.emit('onSaveNew', 'SaveNew')
  onCloseNew = () => btnEvent.emit('onCloseNew', 'CloseNew')

  render() {
    return (
      <div className='edit-form'>
        <input type='text' className='lastname' placeholder='lastname' />
        <input type='text' className='name' placeholder='name' />
        <input type='text' className='patronymic' placeholder='patronymic' />
        <input type='text' className='balance' placeholder='balance' />
        <div className='status edit'>????</div>
        <button className='saveNew' onClick={this.onSaveNew}>Сохранить</button>
        <button className='closeNew' onClick={this.onCloseNew}>Закрыть</button>
      </div>
    )
  }
}