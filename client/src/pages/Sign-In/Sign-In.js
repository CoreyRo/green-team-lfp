import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import Login from "../../components/Login-form";
import axios from 'axios';
import './Login-In.css';

class SignIn extends Component {

    state = {
        username = "",
        password = ""
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleNewUser = () => {

    }





    render() {
        return (
            <Container>
                <Login>
                     {this.state.username}, 
                     {this.state.password}
                </Login>
            </Container>
        )
    }
}

export default SignIn; 