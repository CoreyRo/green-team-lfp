import React from 'react'
import { Link } from 'react-router-dom'
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
          {props.state.projects.length >= 1 ? props.state.projects.map((project, i) => <Link to={`/project/${project._id}`} className='projects' key={i}>{project.title}</Link>  
          ) : <p>My Projects...</p>}
      
      </div>
      </Col>
    </Row>
    <Row>
    <h3 className="info-headers">Joined Projects</h3>
      <Col size="sm-12">
      <div className="myJoined myInfoDiv">
          {props.state.joined.length >= 1 ? props.state.joined.map((join, i) => <Link to='/project-view'className='projects' key={i}>{join.title}</Link>
        ) : <p>Joined Projects...</p>}
      </div>
      </Col>
    </Row>
   
  </Row>)
}

export default MyInfo
