import React, { Component } from 'react';
import { Row, Col, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from 'axios';
import "./Project-View.css";

class Project extends Component {

    state = {
        projectId: "",
        title: "",
        author: "",
        description: "",
        members: "",
        firstName: "",
        lastName: "",
        about:"",
        email: "",        
        userSkills: [],
        desiredSkills: [],
        userId: ""

    }


    //Cant mutate the state like this, gotta use this.setState({})
    componentDidMount() {
        //grab the id off of the window location and store it in state.
        let urlID = window.location.href;
        let getId = urlID.split("/project/");
        let id = getId[1];
        this.setState({
            projectId: id
        })

        axios.get("/api/user/project/" + id)
        .then((res) => {
            console.log(res);
            this.setState({
                userId: res.data.userId,
                author: res.data.author,
                title: res.data.title,
                description: res.data.description,
                members: res.data.members,
                desiredSkills: res.data.desiredSkills
            })
            axios.get("/api/user/profile/" + this.state.userId)
            .then((res) => {
                this.setState({
                    email: res.data.email,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    about: res.data.about,
                    userSkills: res.data.skills
                })

                console.log("Full state", this.state)
            })
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Container>
                <Row>
                    <Col size="md-6 left-col">
                    <h3>{this.state.title}</h3>
                    <i className="fa fa-lg fa-thumbs-o-up like-btn" aria-hidden="true">Like</i>
                    <i className="fa fa-lg fa-archive save-btn" aria-hidden="true">Save</i>
                        <h6 className="small-headers">Details</h6>
                        <p className="description">{this.state.description}</p>
                        <h6 className="small-headers">Skills Desired</h6>
                        {this.state.desiredSkills.map((e,index) =>
                            <span className="skills" key={index}>{e}</span>
                        )}


                        <h6 className="small-headers">Contact</h6>
                        <a className="icons">
                            <i className="fa fa-2x fa-envelope-o"></i>
                        </a>
                        <a className="icons" href="#">
                            <i className="fa fa-2x fa-comments"></i>
                        </a>
                    </Col>


                    <Col size="md-5 outer-col">
                    <div className="col-right-col">
                    <h3>Project Owner: <a className="username" href="/profile/">{this.state.author}</a></h3>
                        <h6 className="small-headers">Bio</h6>
                        <p className="description">{this.state.about}</p>
                        <h6 className="small-headers">Skills</h6>
                        {this.state.userSkills.map((e,index) =>
                        <span className="skills" key={index}>{e}</span>
                        )}
                        </div>

                        <div className="col-browse-col">
                        <a href="/browse">Back To Browsing</a>
                        </div>
                    </Col> 
                </Row>
                </Container>
                <Footer />
            </div>
        )
    }

}

export default Project;