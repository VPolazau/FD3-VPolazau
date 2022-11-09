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
    blockItems: false,
    newItem: {},
  }

  componentDidMount() {
    this.service.getAllProducts().then(items => {
      this.setState({ items })
    })
  }

  deleteItem = id => {
    if (this.state.blockItems) return
    this.setState(({ items }) => {
      const idx = items.findIndex(el => el.id === id)

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
    if (this.state.blockItems) return
    this.setState(({ items, lastSelected }) => {
      const idx = items.findIndex(el => el.id === id)
      const newItemList = items.slice()

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
        selected: true,
      }

      newItemList.splice(idx, 1, newItem)

      return {
        items: newItemList,
        lastSelected: newItem,
      }
    })
  }

  clearSelectedField = () => {
    const { items, lastSelected } = this.state
    const newItemList = items.slice()
    if (!lastSelected) return
    if (lastSelected) {
      const lastSelectedIdx = items.findIndex(el => el.id === lastSelected.id)
      const lastSelectedItem = {
        body: lastSelected.body,
        id: lastSelected.id,
      }

      newItemList.splice(lastSelectedIdx, 1, lastSelectedItem)

      return { items: newItemList, lastSelected: lastSelectedItem }
    }
  }

  addNewItem = () => {
    this.setState(({ items }) => {
      const newItem = {
        id: items[0].id - 2,
        body: {
          title: '',
          price: '',
          imageUrl: '',
          quantity: '',
          discountPercentage: 1,
        },
      }
      return { newItem: newItem, blockItems: true }
    })

    this.clearSelectedField()
    if (this.state.blockItems) return
  }

  onEdit = id => {
    this.selectItem(id)
  }

  fildChanged = () => {
    this.setState({ blockItems: true })
  }

  onFormSave = (body, id) => {
    this.setState(({ items, newItem }) => {
      const idx = items.findIndex(el => el.id === id)
      const item = { id, body, selected: true }
      const newItemList = items.slice()

      if (newItem.id === id) {
        const newItem = { id, body }
        newItemList.unshift(newItem)
        this.selectItem(newItem.id)
        return { items: newItemList, blockItems: false }
      }

      newItemList.splice(idx, 1, item)
      return { items: newItemList, blockItems: false, lastSelected: item }
    })
    this.selectItem(this.state.items[0])
    // остаётся выделенным прошлый item
  }

  onFormClose = () => {
    this.setState({ blockItems: false, newItem: {} })
  }

  render() {
    const { items, lastSelected, newItem } = this.state

    return (
      <ErrorBoundry>
        <ItemList
          items={items}
          newItem={newItem}
          selectedItem={lastSelected}
          onItemDeleted={this.deleteItem}
          onItemSelected={this.selectItem}
          onAddNewItem={this.addNewItem}
          onFormSave={this.onFormSave}
          onFormClose={this.onFormClose}
          onEdit={this.onEdit}
          fildChanged={this.fildChanged}
        />
      </ErrorBoundry>
    )
  }
}
