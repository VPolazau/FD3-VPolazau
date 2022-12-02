import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteClient, saveClient, saveNewClient } from '../../redux/clientsSlice'
import EditForm from '../edit-form/edit-form'
import { btnEvent } from '../helpers/events'
import Item from '../item/'

import './item-list.css'

const ItemList = () => {
  const clients = useSelector(state => state.clients.dataClients)

  const [filteredClients, setFilteredClients] = useState(clients)
  const [addNewClient, setAddNewClient] = useState(false)
  let [newItemID, setNewItemID] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    // filters
    btnEvent.addListener('onAll', () => {
      setFilteredClients(clients)
    })
    btnEvent.addListener('onActive', () => {
      setFilteredClients(clients.filter(client => client.balance > 0))
    })
    btnEvent.addListener('onBlocked', () => {
      setFilteredClients(clients.filter(client => client.balance <= 0))
    })



    // change item
    btnEvent.addListener('onSave', (id, newLastname, newBalance) => {
      dispatch(saveClient({ id, newLastname, newBalance }))
    })
    btnEvent.addListener('onClose', () => {})
    
    btnEvent.addListener('onDeleted', id => {
      dispatch(deleteClient(id))
    })



    // new item
    btnEvent.addListener('newItem', () => {
      setAddNewClient(true)
    })
    btnEvent.addListener('onSaveNew', (lastname, name, patronymic, balance) => {
      dispatch( saveNewClient({lastname, name, patronymic, balance, newItemID}) )
      setNewItemID(newItemID - 1)
      setAddNewClient(false)
    })
    btnEvent.addListener('onCloseNew', () => {
      setAddNewClient(false)
    })

    setFilteredClients(clients)

    return () => {
      btnEvent.removeAllListeners()
    }
  }, [clients])

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
          {filteredClients.map(itemInfo => (
            <Item key={itemInfo.id} itemInfo={itemInfo} />
          ))}
        </div>
      </div>
      {addNewClient ? <EditForm /> : null}
      <button className='new_client' onClick={() => btnEvent.emit('newItem')}>
        Добавить клиента
      </button>
    </div>
  )
}

export default ItemList
