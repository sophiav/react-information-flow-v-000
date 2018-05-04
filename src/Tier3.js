import React from 'react'

//STATELESS COMPONENT
const Tier3 = (props) => (
  <div className="tier3" onClick={props.handleChildClick} style={{backgroundColor: props.color, color: props.color}}></div>
)

export default Tier3
