import React from 'react'
import './EditButton.css'


const EditButton = props => {
    console.log(props)
    let prop = props.props
    return(
    <div className="row text-center mx-auto">
    {prop.state.edit === true ? <button className='text-center mx-auto btn btn-sm btn primary'> Change Picture </button> : ""}
        <button className={prop.state.edit === true ? "text-center mx-auto btn btn-sm btn-success" : "text-center mx-auto btn btn-sm btn-primary"} onClick={prop.editPage}> {prop.state.edit === true ? "Save Changes" : "Edit Profile"}</button>
        
    </div>)
}
export default EditButton