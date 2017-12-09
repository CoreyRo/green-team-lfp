import React, { Component } from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileEdit from '../../components/ProfileEdit'
import MyInfo from '../../components/MyInfo'
import ProfileCard from '../../components/ProfileCard'
import Skills from '../../components/Skills'

import axios from 'axios'
import './Profile.css'


class Profile extends Component {
  state = {
	id: "",
	firstName: "",
	lastName: "",
	about: "",
	username: "",
	displayName: "",
	email: "",
	imageURL: `../public/uploads/users/default_avatar.png`,
	edit: false,
	canEdit: false,
	skillInput: "",
	projects: [],
	joined: ["Pulled", "From", "Database"],
	skills: ["Javascript", "HTML"]
  };

  componentWillMount() {}

  componentDidMount() {
	axios
	  .get("/api/user/myProfile/")
	  .then(res => {
		let data = res.data;
		this.setState({
		  username: data.username,
		  firstName: data.firstName,
		  lastName: data.lastName,
		  displayName: data.displayName || data.username,
		  email: data.email,
		  id: data._id,
		  skills: data.skills,
		  skillInput: data.skills.toString(),
		  joined: data.joined,
		  projects: data.projects,
		  userId: data._id,
		  imageURL: data.imageURL,
		  about: data.about
		});
		this.validUser();
	  })
	  .catch(err => {
		console.log("Mount err", err)
		window.location.replace("/sign-in");
	  });
  }

  handleSubmit = event => {
	event.preventDefault();
	let arSkills = this.state.skillInput.split(",");
	let length = arSkills.length;
	for (var i = 0; i < length; i++) {
	  arSkills[i] = arSkills[i].trim();
	}
	this.setState({
	  about: this.state.about || "",
	  imageURL: this.state.imageURL,
	  displayName: this.state.displayName || this.state.username,
	  email: this.state.email,
	  projects: this.state.projects || null,
	  joined: this.state.joined || null,
	  skills: arSkills,
	  skillInput: this.state.skillInput,
	  firstName: this.state.firstName,
	  lastName: this.state.lastName,
	  edit: !this.state.edit
	}, () => this.postChanges());
	
  }

  postChanges = () => {
	let queryString = "/api/user/myProfile/";
	axios
	.post(queryString, {
	  about: this.state.about,
	  displayName: this.state.displayName,
	  email: this.state.email,
	  projects: this.state.projects,
	  joined: this.state.joined,
	  imageURL: this.state.imageURL,
	  skills: this.state.skills,
	  firstName: this.state.firstName,
	  lastName: this.state.lastName
	})
	.then(res => {
	  

	})
	.catch(err => {
	  console.log("PROFILE SUBMIT ERR",err)
	  localStorage.clear()
	window.location.reload()
	});
	
	
  }

  handleInputChange = event => {
	let value = event.target.value;
	let name = event.target.name;
	this.setState({
	  [name]: value
	});
  };

  handleUpload = event => {
	event.preventDefault();
	axios
	  .post(
		"/api/user/imageUpload",
		{ id: this.state._id },
		this.state.imageURL
	  )
	  .then(res => {

	  })
	  .catch(err => console.log("ImgUp err", err));
	  window.location.reload()
  };

  editPage = event => {
	event.preventDefault();
	this.setState({
	  edit: !this.state.edit
	});
  };

  validUser = event => {
	let stateId = this.state.id;
	let userId = localStorage.getItem("id");
	if (userId === stateId) {
	  this.setState({
		canEdit: true
	  });
	} else {
	  this.setState({
		canEdit: false
	  });
	}
  }

  renderPage = () => {
	if (this.state.edit) {
	  return (
		<ProfileEdit
		  props={this.state}
		  handleArrayInput={this.handleArrayInput}
		  handleSubmit={this.handleSubmit}
		  handleInputChange={this.handleInputChange}
		  editPage={this.editPage}
		/>
	  );
	} else if (!this.state.edit) {
	  return <MyInfo deleteProject={this.deleteProject} state={this.state} editPage={this.editPage} />;
	}
  };

  render() {
	return (
	  <div>
		<Navbar />
		<Header />
		<Container>
		  	<div className="row mx-auto profileHead jumbotron">
			  	<div className="col-sm-12">
					<Row>
						<h4 className="text-center mx-auto profileHeadText">
							{`${this.state.displayName}'s Profile`}
						</h4>
						<Col size="sm-12">
							<Row>
								<Col size="sm-4">
									<div className="row infoContainer">
										<Col size="sm-12">
											<ProfileCard
												state={this.state}
												handleUpload={this.handleUpload}
												handleInputChange={this.handleInputChange}
												handleSubmit={this.handleSubmit}
												editPage={this.editPage}
											/>

											<Row>
												<Skills
												state={this.state}
												/>
											</Row>
										</Col>
									</div>
								</Col>
								<Col size="sm-2" />
								<Col size="sm-4">{this.renderPage()}</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</div>	
		</Container>
		<Footer />
	  </div>
	);
  }
}

export default Profile