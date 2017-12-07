import React, { Component } from 'react';
import axios from 'axios';
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

    render() {
        return (
            <div>
                <div className="row" id="scroll">
                    {this.state.projects ? this.state.projects.map(e =>
                    (
                        <Col size="md-12 myProjects" key={e._id}>
                            <h4 className="myProject-titles">{e.title}</h4>
                            <h6>Posted By: {this.state.username}</h6>
                            <p>Project Details: {e.description}</p>
                            <button className="btn view-btn">View Project</button>
                        </Col>
                    ))
                    :
                    (
                            <Col size="md-12 myProjects">
                                <h1 id="nan">No Projects Posted</h1>
                            </Col>
                    )}
                </div>
            </div>
        )
    }
}

export default MyProjects;