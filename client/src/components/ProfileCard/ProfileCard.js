import React from 'react'
import './ProfileCard.css'
import { Col, Container, Row } from '../Grid'
import UploadImg from '../UploadImg'

const ProfileCard = props => {

    return <Row>
        <Col size="sm-12">
          <div className="text-center mx-auto profileImgDivdiv">
            <img className="profileAvi object-fit_fill" src={`../public/uploads/users/${props.state.imageURL}` || "https://projects.scpr.org/static-files/_v4/images/default_avatar.png"} />
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
          <UploadImg props={props} handleUpload={props.handleUpload} handleInputChange={props.handleInputChange} editPage={props.editPage} />
        </Col>
      </Row>;
}
export default ProfileCard