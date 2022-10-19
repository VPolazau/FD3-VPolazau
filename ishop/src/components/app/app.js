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
    this.service
      .getAllProducts()
      .then(items => {
        this.setState({items})
      })
  }

  render() {
    const { items } = this.state
    console.log(items)
    return (
      <ErrorBoundry>
        <ItemList items={items} />
      </ErrorBoundry>
    )
  }
}
