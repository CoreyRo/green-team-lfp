import React from 'react'
import { Col, Container, Row } from '../Grid'
import './MyInfo.css'


const MyInfo = props => {
  console.log(props)
  return (<Row>
    <Row>
    <h3 className="info-headers">About me</h3>
      <Col size="sm-12">
      <div className="aboutMe profileAboutDiv">
        <p>{props.props.about || "About me...."}</p>
      </div>
      </Col>
    </Row>
    <Row>
      <h3 className="info-headers">My Projects</h3>
      <Col size="sm-12">
      <div className="myProjects profileAboutDiv">
          {props.props.projects.length >= 1 ? props.props.projects.map((project, i) => <span key={i}>{i=== props.props.projects.length - 1 ? project : project + ", "} </span>  
          ) : <p>My Projects...</p>}
      
      </div>
      </Col>
    </Row>
    <Row>
    <h3 className="info-headers">Joined Projects</h3>
      <Col size="sm-12">
      <div className="myJoined profileAboutDiv">
        {props.props.joined.length >= 1 ? props.props.joined.map((join,i) => <span key={i}>{i=== props.props.joined.length - 1 ? join : join + ", "}</span>  
        ) : <p>Joined Projects...</p>}
      </div>
      </Col>
    </Row>
   
  </Row>)
}

export default MyInfo
