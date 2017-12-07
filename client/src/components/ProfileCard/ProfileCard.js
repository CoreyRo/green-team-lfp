import React from 'react'
import './ProfileCard.css'
import { Col, Row } from '../Grid'
import UploadImg from '../UploadImg'

const ProfileCard = props => {
    console.log("Props", props.state)
    return <Row>
        <Col size="sm-12">
          <div className="text-center mx-auto profileImgDiv">
            <img className="profileAvi object-fit_fill" alt="profile-img" src={`../public/uploads/users/${props.state.imageURL}`} />
          </div>
          <div className="row text-center mx-auto">
            <h2 className="text-center mx-auto">
              {" "}
              {`${props.state.displayName}`}{" "}
            </h2>
          </div>
          <div className="row">
            <span className="text-center mx-auto">
              {" "}
              {props.state.email}
            </span>
          </div>
          <div className="row text-center mx-auto" />
          {props.state.canEdit ?
          props.state.edit === true ? <UploadImg editPage={props.editPage}/> : 
            <Row>
        <button className="btn btn-primary mx-auto text-center editProfileButton" onClick={props.editPage}>Edit Profile</button>
            </Row> : ""}
        </Col>
      </Row>;
}
export default ProfileCard