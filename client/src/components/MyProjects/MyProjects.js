import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Col, Row, Container } from "../../components/Grid";
import Card from "../Card"
import "./MyProjects.css";


class MyProjects extends Component {

    state = {
        projects: [],
        userId: "",
        username: ""
    }

    componentDidMount() {

        axios.get("/api/user/myprofile/")
        .then((res) => {
            this.setState({
                userId: res.data._id,
                username: res.data.username
            });
            //nested axios call. need the user id as a parameter for the next call
            axios.get("/api/user/myprojects", {
                params: {
                    userId: this.state.userId
                }
            })
            .then((res) => {
                console.log("My projects res", res);
                this.setState({
                    projects: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            });//end of axios post
        })
        .catch((err) => {
            console.log(err);
        });

    }

    handleProjectView = (e) => {
        e.preventDefault();
        console.log(this)
        // window.location.replace("/project-view/")
    }

    render() {
        return (
            <div>
                <div className="row" id="scroll">
                    {this.state.projects ? 
                    (
                        <Col size="md-12 myProjects">
                            <h4 className="myProject-titles">{this.state.projects.title}</h4>
                            <h6>Posted By: <Link to={"/myprofile/"} className="project-username">{this.state.username}</Link></h6>
                            <p>Project Details: {this.state.projects.description}</p>
                            <button className="btn view-btn" onClick={this.handleProjectView}>View Project</button>
                        </Col>
                    )
                    :
                    (
                            <Col size="md-12">
                                <h1 id="nan">No Projects Posted</h1>
                            </Col>
                    )}
                </div>
            </div>
        )
    }
}

export default MyProjects;