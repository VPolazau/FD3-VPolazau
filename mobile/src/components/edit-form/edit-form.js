import React, { Component } from 'react'

import { btnEvent } from '../events'

import './edit-form.css'

export default class EditForm extends Component {
  setLastnameRef = React.createRef()
  setNameRef = React.createRef()
  setPatronymicRef = React.createRef()
  setBalanceRef = React.createRef()

  onSaveNew = () =>
    btnEvent.emit(
      'onSaveNew',
      this.setLastnameRef.current.value,
      this.setNameRef.current.value,
      this.setPatronymicRef.current.value,
      this.setBalanceRef.current.value
    )
  onCloseNew = () => btnEvent.emit('onCloseNew', 'CloseNew')

  render() {
    return (
      <div className='edit-form'>
        <input
          type='text'
          className='lastname'
          placeholder='lastname'
          ref={this.setLastnameRef}
        />
        <input type='text' className='name' placeholder='name' ref={this.setNameRef} />
        <input
          type='text'
          className='patronymic'
          placeholder='patronymic'
          ref={this.setPatronymicRef}
        />
        <input
          type='text'
          className='balance'
          placeholder='balance'
          ref={this.setBalanceRef}
        />
        <div className='status edit'>????</div>
        <button className='saveNew' onClick={this.onSaveNew}>
          Сохранить
        </button>
        <button className='closeNew' onClick={this.onCloseNew}>
          Закрыть
        </button>
      </div>
    )
  }
}
