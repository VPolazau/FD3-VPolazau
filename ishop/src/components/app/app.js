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
    this.updateItems()
  }

  updateItems = () => {
    this.service.getAllProducts().then(res => {
      res.products.forEach(item => {
        const newItem = {
          id: item.id,
          body: {
            title: item.title,
            price: item.price,
            imageUrl: item.images[0],
            quantity: item.stock,
          },
        }
        this.setState(({ items }) => {
          return {
            items: [...items, newItem]
          }
        })
      })
    })
  }

  render() {
    const { items } = this.state
    return (
      <ErrorBoundry>
        <ItemList items={items} />
      </ErrorBoundry>
    )
  }
}
