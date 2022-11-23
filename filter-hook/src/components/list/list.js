import React, { useMemo } from 'react'

import './list.css'

const List = ({ words }) => {
  
  const memoizeedList = useMemo(() => {
    console.log('render List')
    const withWrap = words.join('\n')
    return (
      <div className='List'>
        <textarea className='output List__output' value={withWrap} readOnly />
      </div>
    )
  }, [words])

  return memoizeedList
}

export default List
