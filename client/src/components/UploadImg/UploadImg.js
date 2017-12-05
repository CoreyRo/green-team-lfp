import React, { Component } from 'react'
import axios from 'axios'
import './UploadImg.css'
import path from 'path'

class UploadImg extends Component {
	
  state = {
    file: "",
    imagePreviewUrl: "",
	id: "",
	uploaded: false
  };

  componentDidMount() {
    console.log("uploadImg");
    axios
      .get("/api/user/myProfile")
      .then(res => {
        this.setState({ id: res.data._id });
      })
      .catch(err => console.log(err));
  }

  fileUpload = file => {
    const url = "/imageUpload";
    const formData = new FormData();
    formData.set("profileAvi", file);
    formData.set("id", this.state.id);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return axios.post(url, formData, config);
  };

  _handleImageChange = e => {
    e.preventDefault();
    console.log("STATE", this.state);
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(e.target);
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
    console.log("file", file);
  };

  _handleSubmit(e) {
	e.preventDefault();
	this.setState({
		  imagePreviewUrl:""
		}) // Stop form submit
    this.fileUpload(this.state.file).then(response => {
      let file = response.data.file;
	  console.log("RESPONSE.DATA", file);
	  window.location.reload()
	  
    });
  }

  render() {
	let { imagePreviewUrl } = this.state;
	
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = <div className="previewText">
          Please select an Image for Preview
        </div>;
    }

    return (
      <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>
          <input
            className="fileInput"
            accept="image/*"
            name="profileImg"
            id="profile-img"
            ref="upload"
            type="file"
            onChange={e => this._handleImageChange(e)}
          />
          <input id="id" name="user-id" type="hidden" value={this.state.id} />
          <button
            className="submitButton"
            type="submit"
            onClick={e => this._handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
        <div className="imgPreview">{$imagePreview}</div>
      </div>
    );
  }
}
export default UploadImg


	



														