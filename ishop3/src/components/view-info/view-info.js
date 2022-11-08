import React from 'react'

import './view-info.css'

const ViewInfo = ({body}) => {
  const { title, imageUrl, price, quantity } = body
  return (
    <div className='viewInfo'>
      <div className='imageUrl'>Image: {imageUrl}</div>
      <div className='title'>Title: {title}</div>
      <div className='price'>Price: {price}$</div>
      <div className='quantity'>Stock: {quantity}</div>
    </div>
  )
}

export default ViewInfo

