import React, { Component } from 'react'

import ShopService from '../../service/shop-service'
import ErrorBoundry from '../error-boundry/error-boundry'
import Items from '../items'

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
    let buff = []
    this.service.getAllProducts().then(res => {
      
      buff = res.products.map(item => {
        return {
          id: item.id,
          body: {
            title: item.title,
            price: item.price,
            imageUrl: item.images[0],
            quantity: item.stock,
          },
        }
      })
      // res.products.forEach(item => {
      //   buff = [
      //     ...buff,
      //     {
      //       id: item.id,
      //       body: {
      //         title: item.title,
      //         price: item.price,
      //         imageUrl: item.images[0],
      //         quantity: item.stock,
      //       },
      //     },
      //   ]
      // })

      this.setState({ items: buff })
    })
  }

  render() {
    const { items } = this.state
    return (
      <ErrorBoundry>
        <Items items={items} />
      </ErrorBoundry>
    )
  }
}
