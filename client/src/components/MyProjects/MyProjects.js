import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Col } from "../../components/Grid";
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
                this.setState({
                    projects: res.data
                })
            })
            .catch((err) => {
            });//end of axios post
        })
        .catch((err) => {
            console.log(err);
        });

    }

    render() {
        return (
            <div>
                <div id="scroll">
                <h1 id="my-title-feed">Latest Post</h1>
                    {this.state.projects ? 
                    (
                        <div className="col-myProjects">
                            <h4 className="myProject-titles">{this.state.projects.title}</h4>
                            <h6>Posted By: <Link to={"/myprofile/"} className="project-username">{this.state.username}</Link></h6>
                            <p className="proj-details">Project Details: {this.state.projects.description}</p>
                            <Link className="btn view-btn" to={"/project/" + this.state.projects._id}>View Project</Link>
                        </div>
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