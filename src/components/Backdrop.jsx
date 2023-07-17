/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import "../App.css"

function Backdrop(props) {
  return (
    <div className="backdrop" onClick={props.onCancel}/>
  )
}

export default Backdrop