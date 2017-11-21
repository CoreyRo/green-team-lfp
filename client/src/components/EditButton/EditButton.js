import React from 'react'
import './EditButton.css'


const EditButton = props => {
    console.log("editbutton", props)
    let prop = props.props
    return(
    <div className="row text-center mx-auto">
    {prop.state.edit === true ? <button className='text-center mx-auto btn btn-sm btn primary'> Change Picture </button> : ""}
    {prop.state.edit === false ? <button className='text-center mx-auto btn btn-sm btn primary' onClick={prop.editPage}> Edit Profile </button> : ""}

        
    </div>)
}
export default EditButton