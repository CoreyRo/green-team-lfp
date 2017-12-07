import React, { Component } from 'react';
import { Container } from '../../components/Grid';
import Header from '../../components/Header';
import Navbar from "../../components/Navbar";
import Login from "../../components/Login-form";
import Footer from "../../components/Footer";
import axios from 'axios';
import './Sign-In.css';

class SignIn extends Component {

    state = {
        email: "",
        password: ""
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log("In handle form submit")
        event.preventDefault();
        axios.post("/api/user/sign-in", {
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            localStorage.setItem('id', res.data._id)
            localStorage.setItem('loggedIn', true)
            window.location.replace("/myProfile/", res);
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
                    <Login 
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    />
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default SignIn; 