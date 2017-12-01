import React, { Component } from 'react';
import { Row, Col, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from 'axios';
import "./Project-View.css";

class Project extends Component {

    state = {
        title: "",
        author: "",
        description: "",
        user: []

    }

    componentDidMount() {
        axios.get("/api/user/project")
        .then((res) => {
            console.log(res);
            this.state.user = res;
            console.log("This.state.user ", this.state.user);

        })
    }

    render() {
        return (
            <div>
            <Navbar />
            <Container>
                <Row>
                <Col size="md-6 left-col">
                <h3>Project Title</h3>
                <i class="fa fa-lg fa-thumbs-o-up like-btn" aria-hidden="true">Like</i>
                <i class="fa fa-lg fa-archive save-btn" aria-hidden="true">Save</i>
                    <h6 className="small-headers">Details</h6>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h6 className="small-headers">Skills Desired</h6>
                    <span className="skills">Javascript</span>
                    <span className="skills">React</span>
                    <span className="skills">Node</span>
                    <span className="skills">Passport</span>

                    <h6 className="small-headers">Contact</h6>
                    <a className="icons" href="#">
                        <i className="fa fa-2x fa-envelope-o"></i>
                    </a>
                    <a className="icons" href="#">
                        <i className="fa fa-2x fa-comments"></i>
                    </a>
                </Col>


                <Col size="md-5 right-col">
                <h3>Project Owner: <a className="username" href="/profile/">Username</a></h3>
                    <h6 className="small-headers">Bio</h6>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <h6 className="small-headers">Skills</h6>
                    <span className="skills">Angular</span>
                    <span className="skills">C#</span>
                    <span className="skills">HTML</span>
                    <span className="skills">CSS</span>
                </Col>
                </Row>
            </Container>
            </div>
        )
    }

}

export default Project;