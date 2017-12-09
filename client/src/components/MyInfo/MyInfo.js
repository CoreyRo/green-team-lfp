import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from '../Grid'
import './MyInfo.css'


const MyInfo = props => {
	return (<div>
				<Row>
					<h3 className="info-headers">About me</h3>
					<div className="col-sm-12 aboutMe myInfoDiv">
						<p className="aboutMeTxt">{props.state.about || "About me...."}</p>
					</div>
				</Row>

				<Row>
					<h3 className="info-headers">My Projects</h3>
					<div className="col-sm-12 myProjects myInfoDiv">
						{props.state.projects.length >= 1 ? props.state.projects.map((project, i) =><Link to={`/project/${project._id}`} className='projects' key={i}>{project.title}</Link>  
					) : <p>My Projects...</p>}
				</div>
				</Row>

				<Row>
					<h3 className="info-headers">Joined Projects</h3>
					<div className="col-sm-12 myProjects myInfoDiv">
						{props.state.joined.length >= 1 ? props.state.joined.map((join, i) => <Link to={`/project/${join._id}`} className='projects' key={i}>{join.title}</Link>
						) : <p>Joined Projects...</p>}
					</div>
				</Row>

	</div>)
}

export default MyInfo
