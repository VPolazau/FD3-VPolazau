import React from 'react'

import data from '../../data/data.json'
import HeadFilters from '../head-filters'
import ItemList from '../item-list'

import './app.css'

const App = () => {
  return <div className='container'>
    <HeadFilters />
    <ItemList clients={data.clients}/>
  </div>
}

export default App
