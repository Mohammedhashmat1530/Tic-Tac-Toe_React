import React from 'react'

const Square = (props) => {
  return (
    <div className='square' onClick={props.onclick}>
      <h2 className='value'>{props.value}</h2>
    </div>
  )
}

export default Square
