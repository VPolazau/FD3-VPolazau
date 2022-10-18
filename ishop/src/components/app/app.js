import React, { Component } from 'react'

import ShopService from '../../service/shop-service'
import ErrorBoundry from '../error-boundry/error-boundry'
import Items from '../items'

import './app.css'

export default class App extends Component {
  state = {
    service: new ShopService,
    idArr: [],
  }

  updateState = () => {
    const idArr = []
    const service = new ShopService()
    service.getAllProducts().then(res => {
      res.products.forEach(item => {
        idArr.push(item.id)
      })
      this.setState({service, idArr})
    })
  }

  componentDidMount(){
    this.updateState()
  }

  render() {
    const { service, idArr } = this.state
    return (
      <ErrorBoundry>
          <Items service={service} idArr={idArr} />
      </ErrorBoundry>
    )
  }
}
