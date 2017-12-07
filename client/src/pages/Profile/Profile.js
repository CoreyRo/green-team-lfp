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
        console.log("PROFILE RES:", res);
        let data = res.data;
        this.setState({
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          displayName: data.displayName || data.username,
          email: data.email,
          id: data._id,
          skills: data.skills,
          joined: data.joined,
          projects: data.projects,
          userId: data._id,
          imageURL: data.imageURL,
          about: data.about
        });
        this.validUser();
        console.log('state', this.state)
      })
      .catch(err => {
        console.log("Mount err", err)
        // window.location.replace("/sign-in");
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    let queryString = "/api/user/myProfile/";
    this.setState({
      about: this.state.about || "",
      imageURL: this.state.imageURL,
      displayName: this.state.displayName || this.state.username,
      email: this.state.email,
      projects: this.state.projects || null,
      joined: this.state.joined || null,
      skills: this.state.skills || null,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      edit: !this.state.edit
    });
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

      .catch(err => console.log(err));
  };

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
  };

  handleArraySubmit = event => {
    event.preventDefault();
    this.state.skills.push(this.state.skillInput);
    this.setState({
      skills: this.state.skills,
      skillInput: ""
    });
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
  };

  removeSkill = event => {
    this.state.skills.splice("skill" + event.target.id, 1);
    this.setState({
      skills: this.state.skills
    });
  };

  renderPage = () => {
    if (this.state.edit) {
      return (
        <ProfileEdit
          props={this.state}
          handleArraySubmit={this.handleArraySubmit}
          handleArrayInput={this.handleArrayInput}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          editPage={this.editPage}
        />
      );
    } else if (!this.state.edit) {
      return <MyInfo state={this.state} editPage={this.editPage} />;
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container>
          <div className="row jumbotron d-flex">
            <div className="row mx-auto profileHead">
              <div className="col-sm-12">
                <h1 className="text-center mx-auto profileHeadText">
                  {`${this.state.displayName}'s Profile`}
                </h1>
              </div>
            </div>
            <Col size="sm-12">
              <Row>
                <Col size="sm-5">
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
                          removeSkill={this.removeSkill}
                        />
                      </Row>
                    </Col>
                  </div>
                </Col>
                <Col size="sm-1" />
                <Col size="sm-6">{this.renderPage()}</Col>
              </Row>
            </Col>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Profile