import React from 'react'

import './br2jsx.css'

const Br2jsx = ({ text }) => {

  let newText = text.split(/<br *\/?>/)

  return <div className='br2jsx'>{brSeparation(newText)}</div>
}

const brSeparation = text => {
  const newText = []
  for (let index = 0; index < text.length; index++) {
    if (index) newText.push(<br key={text[index]}/>)
    newText.push(text[index])
  }

  return newText
}

export default Br2jsx
