import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import "./Inbox.css";

class Inbox extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        axios.get("api/user/myprofile/")
        .then((res) => {
            this.setState({
                messages: res.data.messages
            })

            console.log(this.state);

        })
    }


    render() {
        return(
            <Row>
                <Col size="md-12 inbox">


                </Col>
            </Row>
        )
    }

}

export default Inbox;