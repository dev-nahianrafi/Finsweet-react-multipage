/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Subheading = ({text,styling}) => {
  return (
    <h3 className={styling}>{text}</h3>
  )
}

export default Subheading