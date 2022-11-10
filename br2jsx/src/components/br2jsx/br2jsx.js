import React from 'react'

import './br2jsx.css'

const Br2jsx = ({ text }) => {
  const tagOpen = text.split('<')
  const newText = tagOpen.map(item => {
    const tegClose = item.split('>')
    if (tegClose.length === 2) return tegClose[1]
    else return tegClose[0]
  })

  return <div className='br2jsx'>{brSeparation(newText)}</div>
}

const brSeparation = text => {
  const newText = []
  for (let index = 0; index < text.length; index++) {
    if (index === text.length - 1) newText.push(text[index])
    else {
      newText.push(text[index])
      newText.push(<br />)
    }
  }
  return newText
}

export default Br2jsx
