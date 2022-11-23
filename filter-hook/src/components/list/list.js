import React, { useMemo } from 'react'

import './list.css'

const List = ({ wordsArr }) => {
  
  const memoizeedList = useMemo(() => {
    console.log('render List')
    const withWrap = wordsArr.join('\n')
    return (
      <div className='List'>
        <textarea className='output List__output' value={withWrap} readOnly />
      </div>
    )
  }, [wordsArr])

  return memoizeedList
}

export default List
