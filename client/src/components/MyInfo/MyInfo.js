import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from '../Grid'
import './MyInfo.css'


const MyInfo = props => {
	return (<div className="container-fluid">
				<Row>
					<h3 className="info-headers">About me</h3>
					<div className="col-sm-12 aboutMe myInfoDiv">
						<p className="aboutMeTxt">{props.state.about || "About me...."}</p>
					</div>
				</Row>

				<Row>
					<h3 className="info-headers">My Projects</h3>
					<div className="text-center myProjects myProjectDiv">
					<Row>
						{props.state.projects.length >= 1 ? props.state.projects.map((project, i) =>
						<div key={i} className="projdiv projects col-sm-4"><Link to={`/project/${project._id}`} >{project.title}
						</Link></div>  
					) : <p>My Projects...</p>}
					</Row>
				</div>
				</Row>

				<Row>
					<h3 className="info-headers">Joined Projects</h3>
					<div className="text-center myProjects myProjectDiv">
					<Row>
						{props.state.joined.length >= 1 ? props.state.joined.map((join, i) => 
						<div key={i} className="projdiv projects col-sm-4"><Link to={`/project/${join._id}`}>{join.title}
						</Link></div>
						) : <p>Joined Projects...</p>}
					</Row>
					</div>
				</Row>

	</div>)
}

export default MyInfo
