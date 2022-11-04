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

      // const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)]
      const newArray = items.slice()
      newArray.splice(idx, 1)

      let question = window.confirm(`Do you want to remove ${items[idx].body.title} ?`)

      if (!question) {
        return
      }
      return { items: newArray }
    })

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
          selected: false,
        }

        newItemList.splice(lastSelectedIdx, 1, lastSelectedItem)
      }

      const newItem = {
        ...oldItem,
        selected: !oldItem.selected,
      }

      newItemList.splice(idx, 1, newItem)

      return {
        items: newItemList,
        lastSelected: newItem,
      }
    })
  }

  newItem() {
    this.setState(({items})=>{

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
          onAddNewItem={this.newItem}
        />
      </ErrorBoundry>
    )
  }
}
