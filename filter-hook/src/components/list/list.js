import React, { useMemo } from 'react'

import './list.css'

const List = ({ filteredWords }) => {
  const memoizeedList = useMemo(() => {
    console.log('render List')
    const words = filteredWords.join('\n')
    return (
      <div className='List'>
        <textarea className='output List__output' value={words} readOnly />
      </div>
    )
  }, [filteredWords])

  return memoizeedList
}

export default List
