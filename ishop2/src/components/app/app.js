import React, { Component } from 'react'

import ShopService from '../../service/shop-service'
import ErrorBoundry from '../error-boundry/error-boundry'
import ItemList from '../item-list'

import './app.css'

export default class App extends Component {
  service = new ShopService()

  state = {
    items: [],
  }

  componentDidMount() {
    this.service.getAllProducts().then(items => {
      this.setState({ items })
    })
  }

  deleteItem = id => {
    this.setState(({ items }) => {
      const idx = items.findIndex(el => el.id === id)

      const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)]

      let question = window.confirm(`Do you want to remove ${items[idx].body.title} ?`)

      if(!question) {
        return
      }
      return { items: newArray } 
    })
    // Чтобы не выделялся после выбора "не удалять"
    this.selectItem(id)
  }

  selectItem = id => {
    this.setState(({ items }) => {
      const idx = items.findIndex(el => el.id === id)

      const oldItem = items[idx]
      if (!oldItem) return

      const newItem = {
        ...oldItem,
        body: { ...oldItem.body, selected: !oldItem.body.selected },
      }

      return {
        items: [...items.slice(0, idx), newItem, ...items.slice(idx + 1)],
      }
    })
  }

  render() {
    const { items } = this.state
    return (
      <ErrorBoundry>
        <ItemList
          items={items}
          onItemDeleted={this.deleteItem}
          onItemSelected={this.selectItem}
        />
      </ErrorBoundry>
    )
  }
}
