import React, { Component } from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MyInfo from '../../components/MyInfo'
import ProfileCard from '../../components/ProfileCard'
import Skills from '../../components/Skills'

import axios from 'axios'
import './ViewProfile.css'


class ViewProfile extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    about: "",
    username: "",
    displayName: "",
    email: "",
    pic: "",
    projects: ["Pulled", "From", "Database"],
    joined: ["Pulled", "From", "Database"],
    skills: ["Javascript", "HTML"]
  };

  componentWillMount() {}

  componentDidMount() {
    console.log("WINDOW LOCATION", window.location.href);
    let urlID = window.location.href;
    let getId = urlID.split("/profile/");
    let id = getId[1];
    console.log("get ID ", getId);
    console.log("PROFILE DIDMOUNT");
    axios
      .get("/api/user/profile/" + id)
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
          projects: data.projects
        });
      })
      .catch(err => console.log("PROFILE DIDMOUNT err", err));
  }

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
                <Col size="sm-6">
                  <MyInfo props={this.state} editPage={this.editPage} />
                </Col>
              </Row>
            </Col>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default ViewProfile