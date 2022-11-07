import React, { Component } from 'react'

import ShopService from '../../service/shop-service'
import ErrorBoundry from '../error-boundry/error-boundry'
import ItemList from '../item-list'

import './app.css'

export default class App extends Component {
  service = new ShopService()

  state = {
    items: [],
    lastSelected: null,
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
    this.setState(({ items, lastSelected }) => {
      const idx = items.findIndex(el => el.id === id)
      let newItemList = items

      const oldItem = items[idx]
      if (!oldItem) return

      if (lastSelected) {
        const lastSelectedIdx = items.findIndex(el => el.id === lastSelected.id)
        const lastSelectedItem = {
          ...lastSelected,
          body: { ...lastSelected.body, selected: false },
        }
        newItemList = [
          ...items.slice(0, lastSelectedIdx),
          lastSelectedItem,
          ...items.slice(lastSelectedIdx + 1),
        ]
      }

      const newItem = {
        ...oldItem,
        body: { ...oldItem.body, selected: !oldItem.body.selected },
      }

      return {
        items: [...newItemList.slice(0, idx), newItem, ...newItemList.slice(idx + 1)],
        lastSelected: newItem,
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
