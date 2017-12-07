import React from 'react'
import { Col, Row } from '../Grid'
import './MyInfo.css'


const MyInfo = props => {
  return (<Row>
    <Row>
    <h3 className="info-headers">About me</h3>
      <Col size="sm-12">
      <div className="aboutMe myInfoDiv">
        <p>{props.state.about || "About me...."}</p>
      </div>
      </Col>
    </Row>
    <Row>
      <h3 className="info-headers">My Projects</h3>
      <Col size="sm-12">
      <div className="myProjects myInfoDiv">
          {props.state.projects.length >= 1 ? props.state.projects.map((project, i) => <span className='projects' key={i}>{i === props.state.projects.length - 1 ? project.title : project.title + ", "} </span>  
          ) : <p>My Projects...</p>}
      
      </div>
      </Col>
    </Row>
    <Row>
    <h3 className="info-headers">Joined Projects</h3>
      <Col size="sm-12">
      <div className="myJoined myInfoDiv">
        {props.state.joined.length >= 1 ? props.state.joined.map((join,i) => <span key={i}>{i=== props.state.joined.length - 1 ? join.title : join.title + ", "}</span>  
        ) : <p>Joined Projects...</p>}
      </div>
      </Col>
    </Row>
   
  </Row>)
}

export default MyInfo
