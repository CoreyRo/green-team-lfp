import React from 'react'
import './EditButton.css'


const EditButton = props => {
    console.log("editbutton", props)
    let prop = props.props
    return <div className="row text-center mx-auto">
        {prop.state.edit === true ? 
            <form>
            <div class="form-group text-center">
            <label className="exampleInputFile">Change Picture</label>
            <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
            <button type="submit" className="btn btn-default">Upload Picture</button>
            <small id="fileHelp" class="form-text text-muted">
              Upload a new picture
            </small>
          </div>
          </form> : ""}

        {prop.state.edit === false ? <button className="text-center mx-auto btn btn-sm btn primary" onClick={prop.editPage}>
            {" "}
            Edit Profile{" "}
          </button> : ""}
      </div>;
}
export default EditButton




                            