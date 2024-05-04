/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Peragraph = ({text,styling}) => {
  return (
    <p className={styling}>{text}</p>
  )
}

export default Peragraph