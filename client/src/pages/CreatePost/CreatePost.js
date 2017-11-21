import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./CreatePost.css";
import axios from 'axios';

class CreatePost extends Component {

    state = {
        user: []
    }

    ComponentDidMount() {

    }

    render() {

        return (

            <div>
            <Navbar />
            <Header />
            <Container>

                <Row>
                    <Col>
                    
                    </Col>
                </Row>

            </Container>
            <Footer/>
            </div>

        )
    }

}

export default CreatePost;