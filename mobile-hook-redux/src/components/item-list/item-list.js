import React, { useState, useEffect } from 'react'

import EditForm from '../edit-form/edit-form'
import { btnEvent } from '../helpers/events'
import Item from '../item/'

import './item-list.css'

const ItemList = ({ dataClients }) => {
  const [clients, setClients] = useState(dataClients)
  const [filteredClients, setFilteredClients] = useState(dataClients)
  const [addNewClient, setAddNewClient] = useState(false)
  let [newItemID, setNewItemID] = useState(0)

  useEffect(() => {
    // filters
    btnEvent.addListener('onAll', () => {
      setClients(clients => {
        setFilteredClients(() => {
          return clients
        })
        return clients
      })
    })

    btnEvent.addListener('onActive', () => {
      setClients(clients => {
        setFilteredClients(clients.filter(client => client.balance > 0))
        return clients
      })
    })

    btnEvent.addListener('onBlocked', () => {
      setClients(clients => {
        setFilteredClients(clients.filter(client => client.balance < 0))
        return clients
      })
    })

    // change item
    btnEvent.addListener('onSave', (id, newLastname, newBalance) => {
      setClients(clients => {
        const idx = clients.findIndex(el => el.id === id)
        let newClients = clients.slice()
        newClients = [
          ...clients.slice(0, idx),
          { ...clients[idx], lastname: newLastname, balance: +newBalance },
          ...clients.slice(idx + 1, clients.length),
        ]
        return newClients
      })
    })

    btnEvent.addListener('onClose', () => {})

    btnEvent.addListener('onDeleted', id => {
      setClients(clients => {
        const idx = clients.findIndex(el => el.id === id)
        let newClients = clients.slice()
        newClients.splice(idx, 1)
        return newClients
      })
    })

    // new item
    btnEvent.addListener('newItem', () => {
      setAddNewClient(true)
    })
    btnEvent.addListener('onSaveNew', (lastname, name, patronymic, balance) => {
      setClients(clients => {
        const newClient = {
          id: --newItemID,
          lastname,
          name,
          patronymic,
          balance,
        }
        return [...clients, newClient]
      })
      setNewItemID(newItemID)
      setAddNewClient(false)
    })
    btnEvent.addListener('onCloseNew', () => {
      setAddNewClient(false)
    })
  }, [])

  useEffect(() => {
    setFilteredClients(clients)
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
