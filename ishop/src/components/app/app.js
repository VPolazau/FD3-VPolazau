import React, { Component } from 'react'

import ShopService from '../../service/shop-service'
import ErrorBoundry from '../error-boundry/error-boundry'
import Items from '../items'

import './app.css'

export default class App extends Component {
  state = {
    service: new ShopService,
    arrId: [],
  }

  updateState = () => {
    const arrId = []
    const service = new ShopService()
    service.getAllProducts().then(res => {
      res.products.forEach(item => {
        arrId.push(item.id)
      })
      this.setState({service, arrId})
    })
  }

  componentDidMount(){
    this.updateState()
  }

  render() {
    const { service, arrId } = this.state
    return (
      <ErrorBoundry>
          <Items service={service} arrId={arrId} />
      </ErrorBoundry>
    )
  }
}
