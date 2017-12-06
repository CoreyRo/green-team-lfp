import React, { Component } from 'react'
import axios from 'axios'
import './UploadImg.css'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

class UploadImg extends Component {
  state = {
    file: "",
    imagePreviewUrl: "",
    id: "",
	  uploaded: false,
	  cropData:{}
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

 
  _handleImageChange = e => {
    e.preventDefault();
    
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(e.target);
    reader.readAsDataURL(file);
    
    reader.onloadend = () => {
      console.log("file", file);

      
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
      console.log("STATE", this.state);
    };
    
  };

  
  _crop() {
    // image in dataUrl
    const dataUrl = this.refs.cropper.getCroppedCanvas().toDataURL();

	this.setState({
		cropData: dataUrl
	})
  }

  dataUrlToFile = dataURI => {
    let byteString = atob(dataURI.split(",")[1]);

    // separate out the mime component
    let mimeString = dataURI
      .split(",")[0]
      .split(":")[1]
      .split(";")[0];

    // write the bytes of the string to an ArrayBuffer
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

	let newBlob = new Blob([ab], { type: mimeString });
	console.log("NEWBLOB",newBlob)
	return newBlob
  };

	
	cropAndSave = (e) => {
		e.preventDefault()
		// console.log(this.state)
		let file = this.dataUrlToFile(this.state.cropData)
    // console.log("CROPNSAVE FILE",file)
    
    
		console.log("CROP DATA", this.state.cropData)
		const url = "/imageUpload";
		const formData = new FormData();
    formData.append("profileAvi", file);
    
		formData.append("id", this.state.id);
		const config = {
		headers: {
			"content-type": "multipart/form-data"
		}
		};
    return axios.post(url, formData, config)
    .then(res => {
      
    })
		
	}

	resetCrop = (e) => {
		this.refs.cropper.reset();
	}


  render() {
    let { imagePreviewUrl } = this.state;
	let $imagePreview = null;
	
    if (imagePreviewUrl) {$imagePreview = (
		<div className="imgPreview">
		  	<button 
			  className="btn btn-warning" 
			  onClick={this.cropAndSave}>Save Crop
			</button>
			<button 
			  className="btn btn-primary" 
			  onClick={this.resetCrop}>Reset Crop
			</button>


			
			<Cropper 
				ref="cropper" 
				src={this.state.imagePreviewUrl} 
				style={{ height: 400, width: "100%" }} 
				viewMode={3}
				cropBoxMovable={true}
				dragMode='move'
				aspectRatio={
					1 / 1 // Cropper.js options
				} 
				guides={false} 
				crop={this._crop.bind(this)} 
			/>
        </div>)
	} 
	else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>
          <input className="fileInput" accept="image/*" name="profileImg" id="profile-img" ref="upload" type="file" onChange={e => this._handleImageChange(e)} />
          <input id="id" name="user-id" type="hidden" value={this.state.id} />
          <button className="submitButton" type="submit" onClick={e => this._handleSubmit(e)}>
            Upload Image
          </button>
        </form>
        {$imagePreview}
      </div>;
  }
}
export default UploadImg


	



														