import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Container } from "../../components/Grid";
import Card from "../Card"
import "./MyProjects.css";


class MyProjects extends Component {

    state = {
        projects: [],
        userId: ""
    }

    componentDidMount() {

        axios.get("/api/user/myprofile/").then((res) => {
            this.setState({
                userId: res.data._id
            });
        })
        .then((res) => {

            axios.get("/api/user/myprojects", {
                params: {
                    userId: this.state.userId
                }
            })
            .then((res) => {
                console.log("My projects res", res);
            })
            .catch((err) => {
                console.log(err);
            });//end of axios post
        });//end of axios get

    }

    render() {
        return (
            <div>
                <Col size="md-12">
                    <h1 id="title-feed">My Projects</h1>
                    {this.state.projects ? this.state.projects.map(e =>
                    (
                        <Card key={e._id} title={e.title} subtitle={e.author}
                            text={e.description} firstText="View Project" secondText="View Profile"
                            profile={e._id} project="HELLO"/>
                    ))
                    :
                    (<h1 id="nan">No Projects Posted</h1>)
                    }

                </Col>
            </div>
        )
    }
}

export default MyProjects;