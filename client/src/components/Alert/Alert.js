import React from 'react'

const Alert = props => {
  return(
  <div
    className={`alert alert-danger fade in`}
    style={{ width: '80%', margin: '0 auto', marginTop: 18, ...props.style }}
  >
    {props.errors}
  </div>)
}
export default Alert
