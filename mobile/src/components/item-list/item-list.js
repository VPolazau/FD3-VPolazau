import React, { PureComponent } from 'react'
import deepEqual from 'deep-equal'
import memoize from 'memoizee'

import EditForm from '../edit-form/edit-form'
import { btnEvent } from '../events'
import Item from '../item/'

import './item-list.css'

export default class ItemList extends PureComponent {
  state = {
    clients: this.props.clients,
    filteredClients: this.props.clients,
    addNewClient: false,
    newItemID: 0,
  }

  componentDidMount() {
    // filters
    btnEvent.addListener('onAll', () => {
      this.setState({ filteredClients: this.state.clients })
    })
    btnEvent.addListener('onActive', () => {
      this.setState({
        filteredClients: this.state.clients.filter(client => client.balance > 0),
      })
    })
    btnEvent.addListener('onBlocked', () => {
      this.setState({
        filteredClients: this.state.clients.filter(client => client.balance < 0),
      })
    })

    // change item
    btnEvent.addListener('onSave', (id, newLastname, newBalance) => {
      this.setState(({ clients }) => {
        const idx = clients.findIndex(el => el.id === id)
        let newClients = clients
        newClients = [
          ...clients.slice(0, idx),
          { ...clients[idx], lastname: newLastname, balance: +newBalance },
          ...clients.slice(idx + 1, clients.length),
        ]
        return { clients: newClients }
      })
    })

    btnEvent.addListener('onClose', () => {})

    btnEvent.addListener('onDeleted', id => {
      this.setState(({ clients }) => {
        const idx = clients.findIndex(el => el.id === id)
        let newClients = clients.slice()
        newClients.splice(idx, 1)
        return { clients: newClients }
      })
    })

    // new item
    btnEvent.addListener('newItem', () => {
      this.setState({ addNewClient: true })
    })
    btnEvent.addListener('onSaveNew', (lastname, name, patronymic, balance) => {
      this.setState(({ clients, newItemID }) => {
        const newClient = {
          id: --newItemID,
          lastname,
          name,
          patronymic,
          balance,
        }
        return {
          addNewClient: false,
          clients: [...clients, newClient],
          newItemID,
        }
      })
    })
    btnEvent.addListener('onCloseNew', () => {
      this.setState({ addNewClient: false })
    })
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.clients !== this.state.clients) {
      this.setState({ filteredClients: this.state.clients })
    }
  }

  // shouldComponentUpdate(oldProps, oldState) {
  //   return !(deepEqual(oldProps, this.props) && deepEqual(oldState, this.state))
  // }

  render() {
    console.log('render ItemList')
    const { filteredClients, addNewClient } = this.state

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
            {filteredClients.map(
              memoize(itemInfo => {
                return <Item key={itemInfo.id} itemInfo={itemInfo} />
              })
            )}
          </div>
        </div>
        {addNewClient ? <EditForm /> : null}
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
