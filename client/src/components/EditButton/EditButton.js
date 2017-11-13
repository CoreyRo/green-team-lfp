import React from 'react'
import './EditButton.css'


const EditButton = props => {
    console.log(props)
    let prop = props.props
    return(
    <div className="row text-center mx-auto">
        <button className={prop.edit === true ? "text-center mx-auto btn btn-sm btn-success" : "text-center mx-auto btn btn-sm btn-primary"} onClick={prop.editPage}>{prop.edit === true ? "Save Changes" : "Edit Profile"}</button>
    </div>)
}
export default EditButton