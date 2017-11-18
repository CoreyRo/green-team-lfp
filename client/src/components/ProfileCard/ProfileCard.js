import React from 'react'
import './ProfileCard.css'
import { Col, Container, Row } from '../Grid'
import EditButton from '../EditButton'

const ProfileCard = props => {

    return(
        <Row>
            <Col size="sm-12">
                <div className="text-center profileAboutDiv">
                    <img className="img-fluid" style={{width: 150}} src="https://projects.scpr.org/static-files/_v4/images/default_avatar.png" /> 
                </div>
                <div className="row text-center mx-auto">
                    <h2 className="text-center mx-auto"> {`${props.state.displayName}`} </h2>
                </div>
                <div className="row">
                    <span className="text-center mx-auto"> {props.state.email}</span>
                </div>
                <div className="row text-center mx-auto">
                    
                </div>
                {props.state.canEdit === true ? <EditButton props={props} handleSubmit={props.handleSubmit} editPage={props.editPage}/> : "" }
            </Col>
        </Row>
    )
}
export default ProfileCard