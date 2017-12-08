import React from 'react'
import './Alert.css'

const Alert = props => {
  console.log(props.state.errors)
  
  return(
    <div className="mx-auto text-center alert alert-danger alert-dismissible fade show alertclass" role="alert">
    <strong>{props.state.errors}</strong> 
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>) 
}
export default Alert
