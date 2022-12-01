import React from 'react'

import { btnEvent } from '../helpers/events'

import './edit-form.css'

const EditForm = () => {
  const setLastnameRef = React.createRef()
  const setNameRef = React.createRef()
  const setPatronymicRef = React.createRef()
  const setBalanceRef = React.createRef()

  const onSaveNew = () =>
    btnEvent.emit(
      'onSaveNew',
      setLastnameRef.current.value,
      setNameRef.current.value,
      setPatronymicRef.current.value,
      setBalanceRef.current.value
    )

  const onCloseNew = () => btnEvent.emit('onCloseNew', 'CloseNew')
  return (
    <div className='edit-form'>
      <input
        type='text'
        className='lastname'
        placeholder='lastname'
        ref={setLastnameRef}
      />
      <input type='text' className='name' placeholder='name' ref={setNameRef} />
      <input
        type='text'
        className='patronymic'
        placeholder='patronymic'
        ref={setPatronymicRef}
      />
      <input
        type='text'
        className='balance'
        placeholder='balance'
        ref={setBalanceRef}
      />
      <div className='status edit'>????</div>
      <button className='saveNew' onClick={onSaveNew}>
        Сохранить
      </button>
      <button className='closeNew' onClick={onCloseNew}>
        Закрыть
      </button>
    </div>
  )
}

export default EditForm
