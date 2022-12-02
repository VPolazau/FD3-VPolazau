import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

import HeadFilters from '../head-filters'
import ItemList from '../item-list'
import data from '../../data/data.json'

import './app.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <HeadFilters />
        <ItemList />
      </div>
    </Provider>
  )
}

export default App
