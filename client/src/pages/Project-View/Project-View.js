import React, { Component } from 'react';
import { Row, Container } from "../../components/Grid";
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
        skills: []
    }

    componentDidMount() {
        axios.get("/api/user/project")
        .then((res) => {
            console.log(res);
        })
    }

    render() {
        return (
            <Container>
                
            </Container>
        )
    }

}

export default Project;