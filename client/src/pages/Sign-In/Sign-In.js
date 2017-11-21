import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import Header from '../../components/Header';
import Navbar from "../../components/Navbar";
import Login from "../../components/Login-form";
import Footer from "../../components/Footer";
import axios from 'axios';
import './Sign-In.css';

class SignIn extends Component {

    state = {
        username: "",
        password: ""
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };


    handleNewUser = event => {
        event.preventDefault();
        return window.location("/sign-up");
    }

    handleFormSubmit = event => {
        console.log("In handle form submit")
        event.preventDefault();
        axios.post("/api/user/sign-in", {
            username: this.state.username,
            password: this.state.password
        })
        .then((res) => {
            console.log("SIgn-IN RESSSSS", res)
            localStorage.setItem('id', res.data._id)
            localStorage.setItem('loggedIn', true)
        })
        .catch((err) => {
            console.log(err);
        })
    }





    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Container>
                    <Login />
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default SignIn; 