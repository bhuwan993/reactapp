import React from 'react'

const Circleword = (props) => {
  return (
    <span className='border-[1px] flex items-center justify-center h-[5vh] w-fit px-[2vh] rounded-3xl'>{props.text}</span>
  )
}

export default Circleword